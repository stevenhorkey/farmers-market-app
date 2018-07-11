import React, { Component } from 'react';
import axios from 'axios';
import MarketCard from '../../components/marketCard';
import Carousel from '../../components/carousel';
import SearchBar from '../../components/products/searchbar';
import Sidebar from '../../components/sidebar/Sidebar'

import img1 from '../../assets/images/img2.jpg';
import img2 from '../../assets/images/img7.jpg';
import img3 from '../../assets/images/img8.jpg';

class NearbyMarkets extends Component {

    state = {
        loading: true,
        markets: [],
        zipcode: ''
    }

    componentDidMount() {
        console.log(this.props.location.state)
        let zipcode = this.props.location.state.zipcode;
        axios.get('/api/findMarketByZip/' + zipcode).then((response) => {
            console.log(response)
            this.setState({ zipcode: zipcode, markets: response.data, loading: false })
        })

        // this.setState({ loading: false })
    }


    render() {
        const mileageLinks = [
            {   name: "5 miles",
                onClick: this.sortByMileage, 
                mileage: 5},

            {   name: "10 miles",
                onClick: this.sortByMileage, 
                mileage: 10},

            {   name: "20 miles",
                onClick: this.sortByMileage, 
                mileage: 20},

            {   name: "50 miles",
                onClick: this.sortByMileage, 
                mileage: 50},
        ];

        if (this.state.loading) {
            return (null)
        } else {
            return (
                <div className="container pb-5 pt-3">

                    <div className="row">

                        <div className="col-lg-3">
                            {/* <h1 className="my-4 bhs text-center">Broaden Search</h1> */}
                            <Sidebar links = {mileageLinks} title={"Refine Search"} refine={"Distance"}/>
                        </div>

                        <div className="col-lg-9">
                            <div className='mt-4'>
                                <SearchBar
                                    handleChange={this.handleChange}
                                    searchInput={this.state.searchInput}
                                />
                            </div>
                            <Carousel
                            img1={img1}
                            img2={img2}
                            img3={img3}
                            />
                            <div className="row">
                                {this.state.markets.map((market, key) => {
                                    return (
                                        <MarketCard
                                            marketName={market.marketName}
                                            marketAddress={market.marketAddress}
                                            marketZip={market.marketZip}
                                            marketTime={market.marketTime}
                                            marketImage={market.marketImage}
                                            marketId={market.id}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        };
    }
}



export default NearbyMarkets;
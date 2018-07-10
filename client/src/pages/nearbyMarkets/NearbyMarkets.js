import React, { Component } from 'react';
import axios from 'axios';
import MarketCard from '../../components/marketCard';
import Carousel from '../../components/carousel';


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
        if (this.state.loading) {
            return (null)
        } else {
            return (
                <div>
                    {this.state.markets.map((market, key) => {
                        return (
                            <MarketCard
                                marketName={market.marketName}
                                marketAddress={market.marketAddress}
                                marketZip={market.marketZip}
                                marketTime={market.marketTime}
                                marketImage={market.marketImage}
                            />
                        )
                    })}
                </div>
            )
        };
    }


}



export default NearbyMarkets;
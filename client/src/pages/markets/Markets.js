import React, { Component } from 'react';
import axios from 'axios';
import Hero from '../../components/hero';
import MarketCard from '../../components/marketCard';
import SearchBar from '../../components/products/searchbar';


class Markets extends Component {

    state = {
        loading: true,
        markets: []
    }

    componentDidMount() {
        console.log(this.state)
        axios.get('/api/populateMarketsCard/')
            .then((res) => {
                // console.log(res)
                this.setState({
                    market: res.data
                });
            })
    }

    render() {
        return (

            this.state.loading ?
                (null)
                :

                <div className="row">

                    <div className="col-lg-3">

                        <Hero />

                    </div>

                    <div className="col-lg-9">

                        <div className='mt-4'>
                            <SearchBar />
                        </div>



                        <div className="row">

                            {this.state.markets.map(markets => (
                                <MarketCard
                                    marketName={this.state.market.marketName}
                                    location={this.state.market.location}
                                    time={this.state.market.time}
                                />
                            ))}

                        </div>
                    </div>
                </div>
        )
    }
}

export default Markets;

import React, { Component } from 'react';
import axios from 'axios';
import Hero from '../../components/hero';
import MarketCard from '../../components/marketCard';
import SearchBar from '../../components/products/searchbar';


class Markets extends Component {

    state = {
        loading: true,
        market: [],
        farmers: []
    }

    getUrlVars()
    {
      var vars = {}, hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1);
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          vars[hash[0]] = hash[1];
      }
      return hashes;
    }

    componentDidMount() {
        console.log(this.state)
        let queryNumber = this.getUrlVars();
        axios.get('/api/populateMarketPage/')
            .then((res) => {
                // console.log(res)
                this.setState({
                    market: res.data
                });

                axios.get('/api/populateFarmers/' + this.state.marketID.farmers)
                    .then((result) => {
                        // console.log(result)
                        this.setState({
                            farmers: result.data,
                            loading: false
                        })
                        console.log(this.state)
                    })
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

                            {this.state.market.map(market => (
                                <MarketCard
                                    marketName={this.state.market.marketName}
                                    marketLocation={this.state.market.marketLocation}
                                    marketTime={this.state.market.marketTime}
                                />
                            ))}

                        </div>
                    </div>
                </div>
        )
    }
}

export default Markets;

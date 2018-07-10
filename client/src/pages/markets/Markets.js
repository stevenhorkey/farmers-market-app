import React, { Component } from 'react';
import axios from 'axios';
import Carousel from '../../components/carousel/Carousel';
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
        axios.get('/api/populateMarketPage/' + queryNumber)
            .then((res) => {
                // console.log(res)
                const marketData = res.data;

                axios.get('/api/populateFarmers/' + marketData.id)
                    .then((result) => {
                        // console.log(result)
                        this.setState({
                            farmers: result.data,
                            loading: false,
                            market: marketData
                        })
                        console.log(this.state)
                    })
            })
    }

    render() {
        const style ={
            'marketImg': {
                backgroundImage: 'url(' + this.state.market.marketImage + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: '150px'
            }
        }
        return (

            this.state.loading ?
                (null)
                :

                (<div className="container pb-5">
                        <div className="row">
                            <div className="col-lg-3">
                                <h2><strong>About This Market</strong></h2>
                                {/* // should maybe be vendor name not first name and last name ie company or farm name  */}

                                <h2 className="my-4 text-center">{this.state.market.marketName}</h2>
                                {/* <img className="profileImg"  style = {style}/> */}
                                <div className="card">
                                    <div className = "card-img-top" style = {style.marketImg}></div>
                                    <div className="card-body">
                                        <p className="card-title" id=""></p>
                                        <p>{this.state.market.marketAddress}</p>
                                        <p>{this.state.market.marketTime}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9">

                                <Carousel />

                                <div className="row">
                                    


                                </div>
                                {/* <!-- /.row --> */}

                            </div>
                            {/* <!-- /.col-lg-9 --> */}

                        </div>
                        {/* <!-- /.row --> */}

                    </div>
                )
        )
    }
}

export default Markets;

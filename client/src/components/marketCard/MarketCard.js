import React, { Component } from 'react';
import axios from 'axios';

class MarketCard extends Component {

    state = {
        loading: true,
        market: [],
        farmers: []
    }

    componentDidMount() {
        console.log(this.state)
        console.log(this.props.marketID)
        axios.get('/api/populateMarketCard/' + this.props.marketID)
            .then((res) => {
                // console.log(res)
                this.setState({
                    market: res.data
                })
            }
            )
    }


    render() {
        const style ={
            marketImg: {
                backgroundImage: 'url(' + this.props.marketImage + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                paddingTop: '100%'
            }
        }
        return (
            <React.Fragment>
                {this.props.isUpcomingMarkets ? (
                    <div className="col-lg-4 col-md-6 mb-4 d-inline">
                       <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title text-center">{this.props.marketName}</h3>
                                    <p className="card-text text-center">{this.props.marketLocation}</p>
                                    <p className="card-text text-center">{this.props.marketTime}</p>
                            </div>
                        </div>
                    </div>
                )
                :(<div className="col-lg-4 col-md-6 mb-4" key={this.props.marketId}>
                    <a href={"/markets/?" + this.props.marketId}>
                        <div className="card h-100">
                            <img className="card-img-top" style={style.marketImg}/>
                            <div className="card-body">
                                <h3 className="card-title text-center">{this.props.marketName}</h3>
                                <p className="card-text text-center">{this.props.marketAddress}</p>
                                <p className="card-text text-center">{this.props.marketTime}</p>
                            </div>
                        </div>
                    </a>
                </div>)} 
            </React.Fragment>
        )
    }
}

export default MarketCard;


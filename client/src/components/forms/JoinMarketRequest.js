import React, { Component } from 'react';
import axios from 'axios';

class JoinMarketRequest extends Component {
    render(){
        return(
            <div className="card p-5">
                <div className="card-body">
                    <h5 className="card-title">Markets to Join</h5>
                        <form onSubmit={this.props.onSubmitCreateRequest}>
                            {this.props.nearbyMarkets.map(market => {
                                return(<div className="form-check">
                                            <input className="form-check-input" name="joinRequest" type="checkbox" value={market.id}></input>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                {market.marketName}
                                            </label>
                                        </div>)
                                })
                            }
                         <button className = "btn btn-primary" type="submit">Submit</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default JoinMarketRequest;
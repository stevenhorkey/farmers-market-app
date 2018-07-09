import React, { Component } from 'react';
import axios from 'axios';

class JoinMarketRequest extends Component {
    render(){
        return(
            <div className="card p-2">
                <div className="card-body">
                    <h5 className="card-title"><strong>Available Markets to Join</strong></h5>
                    <form onSubmit={this.props.onSubmitCreateRequest}>
                        {this.props.nearbyMarkets.map(market => {
                            return(
                                <div className="form-check my-4">
                                    <input className="form-check-input" name="joinRequest" type="checkbox" value={market.id}></input>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        <h5>{market.marketName}</h5>
                                    </label>
                                </div>
                                )
                            })
                        }
                        <button className = "btn btn-primary submit w-100" type="submit">Submit Request</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default JoinMarketRequest;
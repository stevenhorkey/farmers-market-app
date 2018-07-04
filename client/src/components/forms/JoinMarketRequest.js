import React, { Component } from 'react';
import axios from 'axios';

class JoinMarketRequest extends Component {
    render(){
        return(
            <div className="card p-5">
                <div class="card-body">
                    <h5 class="card-title">Markets to Join</h5>
                        <form>
                            {this.props.nearbyMarkets.map(market => {
                                return(<div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                            <label className="form-check-label" for="defaultCheck1">
                                                {market.marketName}
                                            </label>
                                        </div>)
                                })
                            }
                        </form>
                </div>
            </div>
        )
    }
}

export default JoinMarketRequest;
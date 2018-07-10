import React, { Component } from 'react';
import axios from 'axios';

import './JoinMarketRequest.css';

class JoinMarketRequest extends Component {
    render(){
        return(
            <div className="card p-2">
                <div className="card-body">
                    <form onSubmit={this.props.onSubmitCreateRequest}>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col-1">Market:</th>
                            <th scope="col-4">Name</th>
                            <th scope="col-4">Address</th>
                            <th scope="col-3">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.nearbyMarkets.map(market => {
                                return(
                                    // <div className="form-check">
                                    <tr>
                                        <td scope="row">
                                            <label className="switch ">
                                                <input name="joinRequest" type="checkbox" value={market.id}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </td>
                                        <td>{market.marketName}</td>
                                        <td>{market.marketAddress}</td>
                                        <td>{market.marketTime}</td>
                                    </tr>
                                )
                                    
                                })
                            }
                        </tbody>
                    </table>
                        <button className = "btn btn-primary submit w-100" type="submit">{
                            this.props.nearbyMarkets ? 'Submit Request' : 'No Available Markets'
                        }</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default JoinMarketRequest;
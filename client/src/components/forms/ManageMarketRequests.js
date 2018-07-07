import React, { Component } from 'react';

class JoinMarketRequest extends Component {
    render(){
        return(
            <div className="card p-2">
                <div className="card-body">
                    <h5 className="card-title">Requests to Join Your Market</h5>
                        <form onSubmit={this.props.onSubmitAcceptRequest}>
                            {this.props.requests.map(request => {
                                return(<div className="form-check">
                                            <input className="form-check-input" name="acceptRequest" type="checkbox" value={request.id}></input>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                {request.farmerName + " of " + request.businessName}
                                            </label>
                                        </div>)
                                })
                            }
                         <button className = "btn btn-primary w-100" type="submit">Submit</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default JoinMarketRequest;
import React, { Component, Fragment } from 'react';

class JoinMarketRequest extends Component {
    render(){
        let requestsExist = Array.isArray(this.props.requests);
        console.log(requestsExist)
        let farmersBusinessName = ""
        if(!this.props.requests.businessName === null){
            farmersBusinessName = " of " + this.props.requests.businessName
        }
        return(
            <Fragment>
                <div className="row">
                    <div className='col'>
                        <h1 className='bhs'>Market Requests</h1>
                    </div>
                </div>
                <div className="card p-2">
                    <div className="card-body">
                        {requestsExist ? (
                            <div>
                                <h5 className="card-title">Requests to Join Your Market</h5>
                                <form onSubmit={this.props.onSubmitAcceptRequest}>
                                    {this.props.requests.map(request => {
                                        return(<div className="form-check">
                                                    <input className="form-check-input" name="acceptRequest" type="checkbox" value={request.id}></input>
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        {request.farmerName + farmersBusinessName}
                                                    </label>
                                                </div>)
                                        })
                                    }
        
                                 <button className = "btn btn-primary w-100" type="submit">Submit</button>
                                </form>
                            </div>
                        ) : (
                            <h5 className="card-title mb-0">You Have No Pending Requests</h5>
                        )}
                            
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default JoinMarketRequest;
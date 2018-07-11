import React, { Component, Fragment } from 'react';

class ManageMarketRequests extends Component {
    render(){
        let requestsExist = Array.isArray(this.props.requests);
        console.log(requestsExist)
        let farmersBusinessName = ""
        if(!this.props.requests.businessName === null){
            farmersBusinessName = this.props.requests.businessName
        }
        console.log(this.props.requests);
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
                                <form onSubmit={this.props.onSubmitAcceptRequest}>
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                            <th scope="col-6">Vendor:</th>
                                            <th scope="col-6">Name</th>
                                            {/* <th scope="col-6">Business Name</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.requests.map(request => {
                                                return(
                                                    // <div className="form-check">
                                                    <tr>
                                                        <td scope="row">
                                                            <label className="switch ">
                                                                <input name="acceptRequest" type="checkbox" value={request.id}/>
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </td>
                                                        <td className='text-capitalize'>{request.farmerName}</td>
                                                        {/* <td>{request.farmersBusinessName}</td> */}
                                                    </tr>
                                                )
                                                    
                                                })
                                            }
                                        </tbody>
                                    </table>
                                        <button className = "btn btn-primary submit w-100" type="submit">{
                                            this.props.requests ? 'Accept Requests' : 'No Available Vendors'
                                        }</button>
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

export default ManageMarketRequests;
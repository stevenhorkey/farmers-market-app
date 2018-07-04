import React, { Component, Fragment } from 'react';


class EditPassword extends Component{

    render(){
        return(
            <div className="modal fade" id="editPasswordModal" tabIndex="-1" role="dialog" aria-labelledby="editPasswordModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Edit Your Password</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group row">
                            <div className="col">
                            <input type="password" className="form-control" name="password" placeholder="New Password" value={this.props.password}
                            onChange={this.props.handleChange}
                            />
                            </div>
                        </div>
                        <button onClick={this.props.updatePassword} type="button" className="w-100 btn btn-primary">Save Password</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default EditPassword;
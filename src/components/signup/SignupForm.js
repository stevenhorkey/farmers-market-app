import React, { Component } from 'react';

class SignupForm extends Component {
    render() {
        return (
            
            <form>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="signupEmail">Your <strong>email address</strong>.</label>
                    <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="signupEmail" aria-describedby="emailHelp" placeholder="john@dough.com" />
                </div>
                <div className="form-group my-4 mb-5">
                    <label htmlFor="signupPassword">Your <strong>password.</strong></label>
                    <input type="password" className="form-control border-top-0 border-left-0 border-right-0" id="signupPassword" placeholder="************" />
                </div>
                <div className="form-group my-4 mb-5">
                    <label htmlFor="signupPhone">Your <strong>phone number.</strong></label>
                    <input type="number" className="form-control border-top-0 border-left-0 border-right-0" id="signupPhone" placeholder="520-234-5678" />
                </div>
                <div className="form-group my-4 mb-5">
                    <label htmlFor="signupCompany">Your <strong>company.</strong></label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" id="signupCompany" placeholder="My Company Name" />
                </div>
                <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Continue &nbsp;<i className="ion-android-arrow-forward"> </i></button>
            </form>
                        
        );
    }
}

export default SignupForm;
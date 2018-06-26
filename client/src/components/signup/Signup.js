import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import './Signup.css';

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            userType: 'Vendor',
            profileImage: '',
            failed: false,
            success: false,
        };
    }

    checkPwd(str) {
        if (str.length < 6) {
            return false;
        } else if (str.length > 50) {
            return false;
        } else if (str.search(/\d/) == -1) {
            return false
        } else if (str.search(/[a-zA-Z]/) == -1) {
            return false
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
            return false
        } else{
            return true
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, password, email, userType, profileImage } = this.state;

        if (this.checkPwd(password)){
            axios.post('/api/auth/signup', { firstName, lastName, password, email, userType, profileImage })
            .then((res) => {
                this.setState({ success: false });
                console.log(this.state.success);
            }).catch((err) => {
                console.log(err);
                this.setState({
                    failed: true
                })
            })
        }  
    }

    render() {
        const { success, firstName, lastName, password, email, userType, profileImage, message } = this.state;
        if (this.state.success) {
            return <Redirect to='/login'/>
        } else {
            return(
            <main className="signup">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-580 mx-auto p-5">
                            <header className="text-center">

                                <h1><i className="ion-clock"> </i>&nbsp;<strong>Sign Up</strong></h1>

                                <p>To get started with farmers-market-app</p>

                            </header>
                            <section>
                                <form>
                                    <div className="form-group mt-4 mb-5">
                                        <label htmlFor="firstName">Your <strong>first name</strong>.</label>
                                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="firstName" placeholder="John" name='firstName' value={firstName} onChange={this.onChange} required
                                        />
                                    </div>
                                    <div className="form-group mt-4 mb-5">
                                        <label htmlFor="lastName">Your <strong>last name</strong>.</label>
                                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="lastName" placeholder="Dough" name='lastName' value={lastName} onChange={this.onChange} required
                                        />
                                    </div>
                                    <div className="form-group mt-4 mb-5">
                                        <label htmlFor="signupEmail">Your <strong>email address</strong>.</label>
                                        <input type="email" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="emailHelp" placeholder="john@dough.com" name='email' value={email} onChange={this.onChange} required
                                        />

                                        {!this.state.failed ? (null) : (<p className='text-center text-primary'>Email already in use!</p>)}


                                    </div>
                                    <div className="form-group my-4 mb-3">
                                        <label htmlFor="signupPassword">Your <strong>password.</strong></label>
                                        <input type="password" className="form-control border-top-0 border-left-0 border-right-0" name='password' placeholder="************" value={password} onChange={this.onChange} required />
                                        <p className='text-center text-primary'>Password must be between 6 and 50 characters, include at least one number, and include at least one letter!</p>


                                    </div>
                                    <div className="form-group my-4 mb-5">
                                        <label htmlFor="profileImage">Your <strong>profile picture url.</strong></label>
                                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" name='profileImage' placeholder="https://picture.com/profile_img" value={profileImage} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sel1">Select Your User Type:</label>
                                        <select className="form-control" name="userType" onChange={this.onChange} required>
                                            <option>Vendor</option>
                                            <option>Market</option>
                                        </select>
                                    </div>
                                    <button onClick={this.onSubmit} type="submit" className="btn btn-primary text-uppercase px-3 pt-2 mt-4 w-100">Continue &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </main>)
        };
    }
}

export default Signup;
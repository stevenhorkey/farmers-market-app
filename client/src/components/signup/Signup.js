import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            profileImage: ''
        };
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, password, email, userType, profileImage } = this.state;

        axios.post('/api/auth/signup', { firstName, lastName, password, email, userType, profileImage })
            .then((res) => {
                this.setState({ success: true });
                this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { success, firstName, lastName, password, email, userType, profileImage } = this.state;

        return (
            <main className="signup">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-580 mx-auto p-5">
                            <header className="text-center">

                                {success ? <h1 className='mb-4'><i className="ion-checkmark-circled"> </i> &nbsp;<strong>Sign Up success!</strong> </h1> : <h1><i className="ion-clock"> </i>&nbsp;<strong>Sign Up</strong></h1>}

                                {success ? <p>You have successfully signed up!<br /><br />You'll get an email asking for feedback once the first take is ready. </p> : <p>To get started with farmers-market-app</p>}

                            </header>
                            <section>
                                <form onSubmit={this.onSubmit}>
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
                                    </div>
                                    <div className="form-group my-4 mb-5">
                                        <label htmlFor="signupPassword">Your <strong>password.</strong></label>
                                        <input type="password" className="form-control border-top-0 border-left-0 border-right-0" name='password' placeholder="************" value={password} onChange={this.onChange} required />
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
                                    <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2 mt-4 w-100">Continue &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Signup;
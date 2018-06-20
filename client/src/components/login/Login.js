import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Login.css";

class Login extends Component {

    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          message: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        console.log(email)
        console.log(password)

        axios.post('/api/auth/login', { email, password })
            .then((res) => {
                console.log('axios post login')
                localStorage.setItem('jwtToken', res.data.token);
                this.setState({ message: '' });
                console.log(res);
                // this.props.history.push('/')
            })
            .catch((error) => {
            // if(error.response.status === 401) {
            //     this.setState({ message: 'Login failed. email or password not match' });
            // }
            console.log(error)
        });
    }

    render() {

    const { email, password, message } = this.state;      
        return (
            <main className="login">
                <div className="bg py-5">
                    <div className="container">
                    <div className="mt-5 card w-580 mx-auto p-5">
                        <header className="text-center">
                            <h1><strong>Log In</strong></h1>
                            <p>Or <Link to="/signup">Sign Up</Link> to continue using Farmers Market App</p>
                        </header>
                        <section>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group mt-4 mb-5">
                                    <label htmlFor="loginEmail">Your <strong>email address</strong>.</label>
                                    <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="loginEmail" aria-describedby="loginEmail" placeholder="john@dough.com" name='email' onChange={this.onChange} value={email}/>
                                </div>
                                <div className="form-group my-4 mb-5">
                                    <label htmlFor="loginPassword">Your <strong>password.</strong></label>
                                    <input type="password" className="form-control border-top-0 border-left-0 border-right-0" id="loginPassword" placeholder="************" name='password' onChange={this.onChange} value={password} />
                                </div>
                                <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Continue &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                            </form>
                        </section>


                    </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Login;
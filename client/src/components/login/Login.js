import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import "./Login.css";

class Login extends Component {

    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          pMessage: '',
          eMessage: '',
          success: false
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        console.log(email)
        console.log(password)

        axios.post('/api/auth/login', { email, password })
            .then((res) => {
                console.log(res);
                localStorage.setItem('jwtToken', res.data.token);
                this.setState({
                    success: res.data.success,
                    pMessage: res.data.pMessage,
                    eMessage: res.data.eMessage
                });
                console.log(res);
                // this.props.history.push('/')
            })
            .catch((error) => {
            console.log(error);
        });
    }

    render() {

    const { email, password, message } = this.state;      
    if (this.state.success){
        return (<Redirect to='/dashboard'/>);
    } else{
        return (
                <main className="login">
                    <div className="bg py-5">
                        <div className="container">
                        <div className="mt-5 card w-580 mx-auto p-5">
                            <header className="text-center">
                                <h1><strong>Log In</strong></h1>
                                
                            </header>
                            <section>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group mt-4 mb-5">
                                        <label htmlFor="loginEmail">Your <strong>email address</strong>.</label>
                                        <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="loginEmail" aria-describedby="loginEmail" placeholder="john@dough.com" name='email' onChange={this.onChange} value={email}/>
                                        <p className='text-center text-primary'>{this.state.eMessage}</p>
                                    </div>
                                    <div className="form-group my-4 mb-5">
                                        <label htmlFor="loginPassword">Your <strong>password.</strong></label>
                                        <input type="password" className="form-control border-top-0 border-left-0 border-right-0" id="loginPassword" placeholder="************" name='password' onChange={this.onChange} value={password} />
                                        <p className='text-center text-primary'>{this.state.pMessage}</p>
                                    </div>
                                    <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2 w-100">Continue &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                                </form>
                            </section>

                        </div>
                        </div>
                    </div>
                </main>
            );
        }
    }
}


export default Login;
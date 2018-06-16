import React, { Component } from 'react';
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <main className="login">
                <div className="bg py-5">
                    <div className="container">
                    <div className="mt-5 card w-580 mx-auto p-5">
                        <header className="text-center">
                            <h1>Log In</h1>
                            <p>To continue to use Audivity</p>
                        </header>
                        <section>
                            <form>
                                <div className="form-group mt-4 mb-5">
                                    <label htmlFor="loginEmail">Your <strong>email address</strong>.</label>
                                    <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="loginEmail" aria-describedby="emailHelp" placeholder="john@dough.com" />
                                </div>
                                <div className="form-group my-4 mb-5">
                                    <label htmlFor="loginPassword">Your <strong>password.</strong></label>
                                    <input type="password" className="form-control border-top-0 border-left-0 border-right-0" id="loginPassword" placeholder="************" />
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
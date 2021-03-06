import React, { Component, Fragment } from 'react';
import taprootInsignia from "../../assets/images/insignia.png"

import './Navbar.css';

class Navbar extends Component {

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    checkToken = () => {
        if (!localStorage.getItem('jwtToken') || localStorage.getItem('jwtToken') === null) {
            console.log(localStorage.getItem('jwtToken'))
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            // Navigation
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand bhs on-hover" href="/"><i className=""></i><img className="insignia" src={taprootInsignia} />{this.props.siteName}</a>
                    <button className="navbar-toggler  navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
            <i className="fa fa-bars"></i>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            {localStorage.getItem('jwtToken') !== null && localStorage.getItem('jwtToken') !== "undefined" ? (
                                <Fragment>
                                    <li className="nav-item on-hover">
                                        <a className="nav-link" href="/dashboard">My Dashboard</a>
                                    </li>
                                    <li className="nav-item on-hover">
                                        <a className="nav-link" href="/" onClick={this.logout}>Log Out</a>
                                    </li>
                                </Fragment>

                            ) : (
                                    <Fragment>
                                        <li className="nav-item on-hover">
                                            <a className="nav-link" href="/login">Login</a>
                                        </li>
                                        <li className="nav-item on-hover">
                                            <a className="nav-link" href="/signup">Sign Up</a>
                                        </li>
                                    </Fragment>
                                )}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
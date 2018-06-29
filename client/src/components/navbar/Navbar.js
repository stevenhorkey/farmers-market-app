import React, { Component, Fragment } from 'react';

import './Navbar.css';

class Navbar extends Component {

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    render() {
        return (
            // Navigation
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand bhs" href="/"><i className="fab fa-pagelines"></i>{this.props.siteName}</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
          <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            {!localStorage.getItem('jwtToken') ? (
                                <Fragment>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signup">Sign Up</a>
                                    </li>
                                </Fragment>
                            ) : (
                                <li className="nav-item">
                                    <a className="nav-link" href="/" onClick={this.logout}>Log Out</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
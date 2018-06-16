import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import $ from 'jquery';

class Navbar extends Component {
    render() {

        $(window).scroll(function () {
            var scrollLocation = $(window).scrollTop();

            if (scrollLocation <= 30) {
                $('nav').css('background-color', 'rgba(0, 0, 0, 0)');
                $('nav').css('box-shadow', 'none');
            } else if (scrollLocation > 30) {
                $('nav').css('background-color', '#2c2c2d');
                $('nav').css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
            }
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container"> 
                    <Link className="navbar-brand" to="/">
                        <img src="https://ucarecdn.com/15478a2f-f7eb-4a22-ad4e-9a381751a612/" alt="Logo" className="mr-2" />
                        <span className="brand-name text-shadow text-white">AUDIVITY</span>
                        <span className="brand-caption beta pl-2 text-shadow text-white">(beta)</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        </ul>

                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item mx-0">
                                <Link className="nav-link text-shadow text-white" to="/team">Team</Link>
                            </li>
                            <li className="nav-item mx-0">
                                <a className="nav-link text-shadow text-white" href="https://angel.co/audivity/jobs" target="_blank">Jobs</a>
                            </li>
                            <li className="nav-item mx-0">
                                <Link className="nav-link text-shadow text-white" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-0">
                                <Link className="nav-link  text-shadow text-white" to="/login">Log In</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link btn btn-secondary px-3 text-white signup-btn" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
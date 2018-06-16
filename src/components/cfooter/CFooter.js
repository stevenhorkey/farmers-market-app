import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CFooter.css";

class CFooter extends Component {
    render() {
        return (
            <footer className="cfooter">
                <section className="text-center bg-dark py-2">
                    <Link className="nav-link text-white" to="/team">Team</Link>
                    <a className="nav-link text-white" href="https://angel.co/audivity/jobs" target="_blank">Jobs</a>
                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                    <Link className="nav-link text-white" to="/login">Log In</Link>
                </section>
                <section className="text-center bg-darker py-2">
                    <span className="small">© 2018 Audvity</span>
                </section>
            </footer>
        );
    }
}

export default CFooter;
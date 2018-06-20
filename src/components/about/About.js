import React, { Component } from 'react';

import './About.css';

class About extends Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="about-heading">
                                <h1>About</h1>
                                <span className="subheading">Welcome! At it's core, Farmer's Market App is a platform to connect individuals to local markets and farmers. The aim of this app is to get fresh, wholesome food into the hands of local communities. </span>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
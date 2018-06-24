import React, { Component } from 'react';

import './About.css';

class About extends Component {
    render(){
        return(
            <section className="about py-5" id='about'>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="about-heading text-center">
                            <h1>About</h1>
                            <span className="subheading">A Blog Theme by Start Bootstrap</span>
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
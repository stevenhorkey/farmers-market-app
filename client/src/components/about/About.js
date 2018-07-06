import React, { Component } from 'react';

import './About.css';

class About extends Component {
    render() {
        return (
            <section className="about py-5" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="about-heading text-center">
                                <h1 className='shrikhand'>About</h1>
                                <span className="subheading text-justify">
                                    Fresh food and fellowship have always been at the <strong><i>root</i></strong> of a thriving community.
                            <br />
                                    At {this.props.siteName}, we strive to cultivate relationships between the farmer and the community. We provide a tool for consumers to browse their local farmers market, seeking and engaging in local neighborhoods and connecting with healthy food sources.
                                </span>
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
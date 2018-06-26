import React, { Component } from 'react';

import './Hero.css';

class Hero extends Component {
    render(){

        return(
            <header className="masthead d-flex">
                <div className="overlay"></div>
                <div className="container align-self-center">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1 className="bhs">{this.props.siteName}</h1>
                            <span className="subheading">Connecting people to their communities and their food.</span>
                        </div>
                        <a href='/products'><button className="btn btn-primary mx-auto w-100">Find My Food</button></a>
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero;


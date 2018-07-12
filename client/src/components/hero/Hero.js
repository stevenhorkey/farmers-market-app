import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Hero.css';

import ZipInput from '../zipcode/ZipInput';
import TapRootLogo from '../../assets/images/insignia.png'

import Bounce from 'react-reveal/Bounce';

class Hero extends Component {

    state = {
        zipInput: '',
        redirect: false,
        input: ''
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    submitZip = (event) => {
        // console.log(this.state.zipInput)
        event.preventDefault();
        let input = parseInt(this.state.zipInput);
        console.log(input)
        if (isNaN(input)) {
            this.setState({
                redirect: true,
                input: "product"
            })
        }
        else {
            this.setState({
                redirect: true,
                input: "zipcode"
            })
        }

    }

    render() {
        if (this.state.redirect) {
            return (this.state.input === "product" ?
                (<Redirect to={{
                    pathname: '/products',
                    state: {
                        zipcode: this.state.zipInput
                    }
                }} />)
                : (<Redirect to={{
                    pathname: '/nearbyMarkets',
                    state: {
                        zipcode: this.state.zipInput
                    }
                }} />)
            )
        } else {
            return (
                <header className="masthead d-flex">
                    <div className="overlay"></div>
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <Bounce top>
                                    <div className="site-heading">
                                        <h1 className="bhs sitename">{this.props.siteName}</h1>
                                        <span className="subheading">Connecting people to their communities and their food.</span>
                                        <img src={TapRootLogo} className="taprootLogo" />

                                    </div>
                                    <p className='text-center text-white'>Enter your zip code or search to find products and markets in your local area.</p>
                                    <div className='m-1 col-md-6 col-sm-8 col-xs-12 mx-auto'>
                                        <ZipInput
                                            handleChange={this.handleChange}
                                            submitZip={this.submitZip}
                                            zipInput={this.state.zipInput}
                                            className="zipinput"
                                        />
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </header>
            )
        }
    }
}

export default Hero;


import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Hero.css';

import ZipInput from '../zipcode/ZipInput';

class Hero extends Component {

    state = {
        zipInput: '',
        redirect: false
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };

    submitZip = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }

    render(){
        if(this.state.redirect){
            return(
                <Redirect to={{
                    pathname: '/products',
                    state: {
                        zipcode: this.state.zipInput
                    }
                }} />
            )
        } else {
            return(
                <header className="masthead d-flex">
                    <div className="overlay"></div>
                    <div className="container align-self-center">
                        <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1 className="bhs"><i className="fab fa-pagelines"></i>{this.props.siteName}</h1>
                                <span className="subheading">Connecting people to their communities and their food.</span>
                            </div>
                            <p className='text-center text-white'>Enter your zip code below to find thousands of thousands of items in your local area...</p>
                            <div className='m-1 col-md-6 col-sm-8 col-xs-12 mx-auto'>
                                <ZipInput
                                handleChange={this.handleChange}
                                submitZip={this.submitZip}
                                zipInput={this.state.zipInput}
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
            )
        }
        
    }
}

export default Hero;


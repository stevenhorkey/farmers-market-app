import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Hero.css';

import SearchBar from '../products/searchbar/SearchBar';

class Hero extends Component {

    state = {
        searchInput: '',
        redirect: false
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };

    submitSearch = (event) => {
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
                        searchInput: this.state.searchInput
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
                            <div className='m-1'>
                                <SearchBar
                                handleChange={this.handleChange}
                                searchInput={this.state.searchInput}
                                submitSearch={this.submitSearch}
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


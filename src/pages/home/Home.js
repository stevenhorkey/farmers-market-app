import React, { Component } from 'react';

import './Home.css';

import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'

class Home extends Component {
    render(){
        return(
            <div>
                <Hero/>
                <About/>
            </div>
        )
    }
}

export default Home;

import React, { Component } from 'react';

import './Home.css';

import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'

class FarmersPage extends Component {

    state = {
        farmersName: '',
        siteName: 'Farmers Market App',
        loggedIn: false
    }
    render() {

        let siteName = this.state.siteName;
        let farmersName = this.state.farmersName;

        return (

            <div>
                <Navbar siteName={siteName} />
                <Hero farmersName={this.props.farmersName} />
                <About />
            </div>
        )
    }
}

export default FarmersPage;

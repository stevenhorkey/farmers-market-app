import React, { Component } from 'react';

import './Home.css';

import Hero from '../../components/hero/Hero';
import UpcomingMarkets from '../../components/upcomingMarkets/UpcomingMarkets';
import About from '../../components/about/About';

class Home extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD:src/pages/home/Home.js
                <Hero />
                <UpcomingMarkets />
                <About />
=======
                <Hero siteName={this.props.siteName} />
                <UpcomingMarkets/>
                <About/>
>>>>>>> 2ff353c69c5a048420cc2745551c0d2e2a331ffe:client/src/pages/home/Home.js
            </div>
        )
    }
}

export default Home;

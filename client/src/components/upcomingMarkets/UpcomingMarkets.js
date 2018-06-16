import React, { Component } from 'react';

import './UpcomingMarkets.css';

class UpcomingMarkets extends Component {
    render(){
        return(
            <section className="upcoming-markets">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="upcoming-markets-heading text-center">
                            <h1>Upcoming Markets</h1>
                            <span className="subheading"></span>
                        </div>
                        <p></p>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default UpcomingMarkets;
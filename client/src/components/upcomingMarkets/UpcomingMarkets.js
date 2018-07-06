import React, { Component } from 'react';
import marketCard from '../marketCard/MarketCard';

import './UpcomingMarkets.css';
import $ from 'jquery';
import MarketCard from '../marketCard/MarketCard';



// //ajax call for upcomign farmers markets
function getDetails(id) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        // submit a get request to the restful service mktDetail.
        url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id,
        dataType: 'jsonp',
        jsonpCallback: 'detailResultHandler'
    });
}
//iterate through the JSON result object.
function detailResultHandler(detailresults) {
    for (var key in detailresults) {
        alert(key);
        var results = detailresults[key];
        alert(results['GoogleLink']);
    }
}


// //need to populate div with this info
// getDetails();
// detailResultHandler();

class UpcomingMarkets extends Component {
    render() {
        return (
            <section className="upcoming-markets py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="upcoming-markets-heading text-center">
                                <h1 className='shrikhand'>Upcoming Markets</h1>
                                <span className="subheading"></span>
                            </div>
                            <div>
                                <MarketCard
                                    marketName='Sata Rita Market'
                                    marketLocation='1111 W Rd'
                                    marketTime='11:00AM'
                                />
                                <MarketCard
                                    marketName='Pueblo Market'
                                    marketLocation='2222 W Rd'
                                    marketTime='9:00AM'
                                />
                                <MarketCard
                                    marketName='Rice Market'
                                    marketLocation='3333 W Rd'
                                    marketTime='10:00AM'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default UpcomingMarkets;



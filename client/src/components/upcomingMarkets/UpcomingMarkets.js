import React, { Component } from 'react';
import marketCard from '../marketCard/MarketCard';

import './UpcomingMarkets.css';
import $ from 'jquery';
import MarketCard from '../marketCard/MarketCard';

import Slide from 'react-reveal/Slide';


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
                                <h1 className='bhs text-white'>Featured Markets</h1>
                                <span className="subheading"></span>
                            </div>
                            <div>
                                <Slide left>
                                    <MarketCard
                                        marketName='Santa Rita Market'
                                        marketLocation='1327 W Santa Rita Rd'
                                        marketTime='Saturdays 11:00AM - 7:00PM'
                                        marketImage='https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg'
                                        isUpcomingMarkets={true}
                                    />
                                </Slide>
                                <Slide right>
                                    <MarketCard
                                        marketName='Pueblo Market'
                                        marketLocation='785 E Casa Rd'
                                        marketTime='Monday-Friday 11:00AM - 5:00PM'
                                        marketImage='https://images.unsplash.com/photo-1519397028973-5dbbdaecd2f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71af403f1fea800733284e2e0711d4f&auto=format&fit=crop&w=1050&q=80'
                                        isUpcomingMarkets={true}
                                    />
                                </Slide>
                                <Slide left>
                                    <MarketCard
                                        marketName='Rice Market'
                                        marketLocation='8934 W Campbell Rd'
                                        marketTime='Thursday, Friday-Sunday 10:00AM - 8:00 PM'
                                        marketImage='https://images.unsplash.com/photo-1524584830732-b69165ddba9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdf112f19b1f9e4c1fe8e24272a85a52&auto=format&fit=crop&w=1919&q=80'
                                        isUpcomingMarkets={true}
                                    />
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default UpcomingMarkets;



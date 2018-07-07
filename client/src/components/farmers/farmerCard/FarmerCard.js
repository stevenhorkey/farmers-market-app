import React, { Component } from 'react';
// import('FarmerCard.css');

class FarmerCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (


            <div className="card">
                <div className="card">
                    <div className="img-container">
                        <img src={this.props.profileImage} />
                    </div>
                </div>
                <div className="bio-container">

                    <div>
                        <h4>Associated Markets:</h4>
                            {this.props.markets.map(market => (
                                <div>
                                <h4 className="market-container"><i>{market.marketName}</i></h4>
                                <ul>
                                 <li>
                                     {market.marketLocation}
                                 </li>
                                 <li>
                                     {market.marketTime}
                                 </li>
                             </ul>
                          </div>))}
                        <div>
                            <p className="bio-container">{this.props.bio}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FarmerCard;
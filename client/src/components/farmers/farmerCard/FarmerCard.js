import React, { Component } from 'react';
import './FarmerCard.css';

class FarmerCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="card">
                <div className='card-header sidebarHeader text-center'>
                    About Me
                </div>
                <div className="card-body">
                        {this.props.markets ? <p className="card-title text-center bhs" id="farmerInfoTitle">You Can Find Me At:</p> : (null)}
                            {this.props.markets.map(market => (
                                <a href={'/markets/?'+market.id}>
                                    <div className='card py-3 mb-3 on-hover'>
                                        <h4 className="market-container bhs text-center">{market.marketName}</h4>
                                            <div className='text-center'>
                                            {market.marketAddress}
                                            </div>
                                            <div className='text-center'>
                                            {market.marketTime}
                                            </div>
                                    </div>
                                </a>
                            ))}
                        <div>
                            {/* <p className='text-center bhs'>Information</p> */}
                            <p className="bio-container">{this.props.bio}</p>
                        </div>
                </div>
            </div>

        )
    }
}

export default FarmerCard;
import React from 'react';

import './FarmerCard.css';

const FarmerCard = props => (

    <div className="card">
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
        <div className="bio-container">
            <h2>About This Vendor</h2>
            <div>
                <h4><i>You can find this vendor next at the: </i></h4>
                <h4 className="market-container"><strong>{props.marketName} Farmer's Market</strong></h4>
                <ul>
                    <li>
                        {props.marketLocation}
                        {props.marketTime}
                    </li>
                </ul>
                <div>
                    <p className="bio-container">{props.bio}</p>
                </div>
            </div>
        </div>


    </div>

);


export default FarmerCard;
import React from 'react';

import './FarmerBio.css';

const FarmerBio = props => (

    <div className="card">
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
        </div>

        <div>
            <p className="bio-container">{props.bio}</p>
        </div>
    </div>

);


export default FarmerBio;
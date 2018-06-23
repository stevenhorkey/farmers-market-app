import React from 'react';

import './FarmerPhoto.css';

const FarmerPhoto = props => (

    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);


export default FarmerPhoto;


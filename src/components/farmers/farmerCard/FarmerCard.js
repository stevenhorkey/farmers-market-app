import React, { Component } from 'react';

import './FarmerCard.css';



class FarmerCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.profileImage} />
            </div>
        )
    }
}

export default FarmerCard;

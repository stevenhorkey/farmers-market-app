import React, { Component } from 'react';

import './Home.css';

import Hero from '../../components/hero/Hero'
import FarmerCard from '../../components/farmers/farmerCard/FarmerCard';

class FarmerProfile extends Component {

    render() {
        return (
            <div>
                <FarmerCard profileImage={} />
            </div>
        )
    }
}

export default FarmerProfile;

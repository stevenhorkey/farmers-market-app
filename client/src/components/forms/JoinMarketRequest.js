import React, { Component } from 'react';
import axios from 'axios';

class JoinMarketRequest extends Component {
    componentDidMount(){
        //put the users jwt token into the axios request's header;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/nearbyMarkets/')
            .then((response)=>{
                response.map(market => {
                    
                })
        })
    }
    
}

export default JoinMarketRequest;
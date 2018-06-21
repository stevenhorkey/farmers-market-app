import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Test.css';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          userId: ""
        };
    }
    
    componentDidMount() {
        console.log(this.state)
        console.log(localStorage.getItem('jwtToken'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post("/api/auth/jwt").then( (res)=> {
            console.log(res.success)
            if(res.data.success){
                this.setState({loading: false, userId: res.data.id})
                console.log(this.state)
            }
            
        }).catch((error) => {
            console.log(error)
            this.props.history.push("/login");
        })
    }

    render() {
        const { loading } = this.state.loading;
        
        if(loading) {
            return null
        }
        
        return (
            <div className="title">Protected Page for ID: {this.state.userId}</div>
        );
    }
}

export default Test;
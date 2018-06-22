import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './Dashboard.css';
import '../../components/sidebar/Sidebar';
import '../../components/products/product/Product';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          userType: "",
          products: [],
          markets: [],
          requests: [],

        };
    }

    componentDidMount() {
        console.log(this.state)
        console.log(localStorage.getItem('jwtToken'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post("/api/auth/jwt").then( (res)=> {
            console.log(res.success)
            if(res.data.success){
                this.setState({loading: false, userType: res.data.userType})
                console.log(this.state)
            }
            
        }).catch((error) => {
            console.log(error)
            this.props.history.push("/login");
        })
    }

    render() {
        return (
            this.state.loading ? 
            (null)
            : <div className="title">Protected Page for ID: {this.state.userType}</div>
        );
    }
}

export default Dashboard;

//First

//SELLER    
//sidebar (in the container not the root)
   //manage products
       //initially generates all of the users products on the site
       //add products button
           //modal form
               // item name (required)
               // item pic (optional)
               // item description (optional)
               // item price (optional)
       //hover picture brings x to delete product
       //click product allows user to edit products
           //modal form
               // item name (required)
               // item pic (optional)
               // item description (optional)
               // item price (optional)
   //connect to market
       //location input
       //generates list of markets to associate ith
   //manage profile
       //create mission statement
       //profile picture

//ORGANIZER
   //sidebar
       //farmer request (notification)
           //list of farmers who have associated themselves with the    market
               //accept or deny button for each
       //manage market
           //if market does not exist
               //create market button
                   //modal form
                       //time
                       //name
                       //image
                       //location
               //manage market
                   //modal form
                       //time
                       //image
                       //name
                       //location

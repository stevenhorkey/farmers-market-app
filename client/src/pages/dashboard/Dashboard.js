import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';

import './Dashboard.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Product from '../../components/products/product/Product';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: [],
            products: [],
            markets: [],
            requests: [],
            modalIsOpen: false,
            modalProductID: ''
        };
    };


    componentDidMount() {
        console.log(this.state)
        console.log(localStorage.getItem('jwtToken'));
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post("/api/auth/jwt").then((res) => {
            console.log(res.data.success)
            if (res.data.success) {
                if (res.data.user.userType == "Vendor") {
                    axios.get("/api/populateDashboardVendor/" + res.data.user.id).then((response) => {
                        console.log(response.data)

                        this.setState({ loading: false, products: response.data });

                    });
                }
                // else {
                //     axios.get("/api/populateDashboardMarket").then((res) => {

                //     });
                // }

                // this.setState({ loading: false, userType: res.data.userType })
                console.log(this.state)
            }

        }).catch((error) => {
            console.log(error)
            this.props.history.push("/login");
        })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            this.state.loading ?
                (null)
                : <div className="title">Products: {this.state.products[0].item}>
                    <Product isDashboard={true}
                        item={this.state.products[0].item}
                        img={this.state.products[0].image}
                        id={this.state.products[0].id}
                        modalOpen={() => { this.openModal() }}>
                    </Product>
                    <Modal isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        contentLabel="Example Modal">

                        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
                    </Modal>
                </div>
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

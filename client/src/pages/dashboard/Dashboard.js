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
            modalIsOpenUpdate: false,
            modalIsOpenCreate: false, 
            modalProductID: '',
            item: '',
            image: '',
            id: ''

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
                    let userInfo = res.data.user;
                    console.log(userInfo);
                    axios.get("/api/populateDashboardVendor/" + userInfo.id).then((response) => {
                        console.log( response.data)

                        this.setState({ loading: false, products: response.data, user: userInfo });
                        console.log(this.state)
                    });
                }
                // else {
                //     axios.get("/api/populateDashboardMarket").then((res) => {

                //     });
                // }

                // this.setState({ loading: false, userType: res.data.userType })
                
            }

        }).catch((error) => {
            console.log(error)
            this.props.history.push("/login");
        })
    }

    openModalUpdate=(childData, event)=> {
        const prodItem = childData.item;
        const prodImg = childData.image;
        const prodId = childData.id;
        this.setState({modalIsOpenUpdate: true, item: prodItem, image: prodImg, id: prodId });
      }

    afterOpenModalUpdate=()=> {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
      }  
    
    closeModalUpdate=()=> {
        this.setState({modalIsOpenUpdate: false, item: '', image: '' });
      }

    onSubmitUpdate = (e) => {
        e.preventDefault();
        console.log(this.state.user)
        const item = this.state.item;
        const image = this.state.image;
        const id = this.state.id;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.put('/api/updateProduct/' +  id, {item, image})
            .then((res) => {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                axios.get('/api/populateProducts/' + this.state.user.id)
                .then((res) => {
                    this.setState({ products: res.data, modalIsOpenUpdate: false, item: '', image: '', id: ''  });
                    console.log(this.state)
                })
                // this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })
    }

    openModalCreate=()=>{
        this.setState({modalIsOpenCreate: true});
    }

    afterOpenModalCreate=()=>{
        
    }
    
    closeModalCreate=()=>{
        this.setState({modalIsOpenCreate: false, item: '', image: '' });
    }

    onSubmitCreate = (e) => {
        e.preventDefault();
        console.log(this.state.user)
        const item = this.state.item;
        const image = this.state.image
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/newProduct', { item, image})
            .then((res) => {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                axios.get('/api/populateProducts/' + this.state.user.id)
                .then((res) => {
                    this.setState({ products: res.data, modalIsOpenCreate: false, item: '', image: ''  });
                    console.log(this.state)
                })
                // this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

   

    render() {
        return (
            this.state.loading ?
                (null)
                : this.state.products[0] === undefined ?
                
                    (<div>
                      <div><h1>You don't have any products.....Would you like to create one?</h1> <button className = "btn" onClick={this.openModalCreate} id="createProduct">Add a Product</button></div>
                      <Modal  isOpen={this.state.modalIsOpenCreate}
                            onAfterOpen={this.afterOpenModalCreate}
                            onRequestClose={this.closeModalCreate}
                            // style={customStyles}
                            contentLabel="Example Modal">

                        <h2 ref={subtitle => this.subtitle = subtitle}>Add a new Product to your inventory</h2>
                        
                        <div>Product Information</div>
                        <form onSubmit={this.onSubmitCreate}>
                            <div className="form-group mt-4 mb-5">
                                <label htmlFor="item">Product Name</label>
                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.state.item} onChange={this.onChange} required/>
                            </div>
                            <div className="form-group mt-4 mb-5">
                                <label htmlFor="image">Image URL</label>
                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.state.image} onChange={this.onChange} required/>
                            </div>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                        <button className="btn" onClick={this.closeModalCreate}>Cancel</button>
                    </Modal>
                    </div>)
                  : (<div>
                        <div className= "row"><h1>Products</h1></div>
                        <div className="row">
                            {this.state.products.map(product => (
                                <Product isDashboard={true}
                                    item={product.item}
                                    img={product.image}
                                    id={product.id}
                                    modalOpen= {(e)=>{this.openModalUpdate(product, e)}}>
                                </Product>
                            ))}
                        </div>
                    <button className = "btn" onClick={this.openModalCreate} id="createProduct">Add a Product</button>
                    <Modal  isOpen={this.state.modalIsOpenCreate}
                            onAfterOpen={this.afterOpenModalCreate}
                            onRequestClose={this.closeModalCreate}
                            // style={customStyles}
                            contentLabel="Example Modal">

                        <h2 ref={subtitle => this.subtitle = subtitle}>Add a new Product to your inventory</h2>
                        
                        <div>Product Information</div>
                        <form onSubmit={this.onSubmitCreate}>
                            <div className="form-group mt-4 mb-5">
                                <label htmlFor="item">Product Name</label>
                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.state.item} onChange={this.onChange} required/>
                            </div>
                            <div className="form-group mt-4 mb-5">
                                <label htmlFor="image">Image URL</label>
                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.state.image} onChange={this.onChange} required/>
                            </div>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                        <button className="btn" onClick={this.closeModalCreate}>Cancel</button>
                    </Modal>
                    <Modal  isOpen={this.state.modalIsOpenUpdate}
                            onAfterOpen={this.afterOpenModalUpdate}
                            onRequestClose={this.closeModalUpdate}
                            // style={customStyles}
                            contentLabel="Example Modal">

                        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <div>Product Information</div>
                        <form onSubmit={this.onSubmitUpdate}>
                            <div className="form-group mt-4 mb-5">
                                <label htmlFor="item">Product Name</label>
                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.state.item} onChange={this.onChange} required/>
                            </div>
                            <div className="form-group mt-4 mb-5">
                                <label htmlFor="image">Image URL</label>
                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.state.image} onChange={this.onChange} required/>
                            </div>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                        <button className="btn" onClick={this.closeModalUpdate}>Cancel</button>
                    </Modal>
                  
                  </div>)
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

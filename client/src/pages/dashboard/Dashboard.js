import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';

import './Dashboard.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Product from '../../components/products/product/Product';
import AddCard from '../../components/products/addcard/AddCard';
import Categories from '../../components/products/categories/Categories';
import Carousel from '../../components/carousel/Carousel';
import MarketCardDashboard from '../../components/marketCardDashboard';

//this file has quite a bit of states, this is because the page handles many different use cases, however, this page should probably
//be broken up into multiple files down the line
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
            id: '',
            market: '',
            marketImage: '',
            marketTime: '',
            marketAddress: '',
            modalIsOpenCreateMarket: false,
            modalIsOpenUpdateMarket: false,
        };
    };
    //this function runs when the page successfully loads on the client side
    componentDidMount() {
        console.log(this.state)
        console.log(localStorage.getItem('jwtToken'));
        //the first thing we do is put a jwtToken inside the axios request header
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //then make a post request to the auth routes to check whether the user is authenticated as the dashboard requires a user to be logged in
        //notice, this post doesnt actually send any data, its just to verify log in
        axios.post("/api/auth/jwt").then((res) => {
            console.log(res.data.success)
            //if the response from the server includes success:true (aka is logged in)
            if (res.data.success) {
                //if the user is a vendor
                //Vendor and Organizer dashboards are both loaded very similarly
                if (res.data.user.userType == "Vendor") {
                    //assign the users data to a variable
                    let userInfo = res.data.user;
                    console.log(userInfo);
                    //send a get request to the server in api-routes using the users id number as a request parameter
                    axios.get("/api/populateDashboardVendor/" + userInfo.id).then((response) => {
                        console.log(response.data)
                        //set new values in the state
                        //response.data is an array of products tied to the user
                        //users info is set into state
                        this.setState({ loading: false, products: response.data, user: userInfo });
                        console.log(this.state)
                    });
                }
                //if the user is a market organizer
                //Vendor and Organizer dashboards are both loaded very similarly
                else {
                    //assign users data to a variable
                    let userInfo = res.data.user;
                    //send a get request to the server in api-routes using the users id number as a request parameter
                    axios.get("/api/populateDashboardMarket/" + userInfo.id).then((response) => {
                        //set new values in the state
                        //response.data is an object with a single markets info
                        //users info is set into state
                        this.setState({ loading: false, markets: response.data, user: userInfo });
                    });
                }

                // this.setState({ loading: false, userType: res.data.userType })

            }
        //if there is an error or ser is not logged in redirect user to the login page
        }).catch((error) => {
            console.log(error)
            this.props.history.push("/login");
        })
    }

    //this is a function that opens the update modal for products, it is sent as a prop with the products to get the childData of the product
    //this is so we only update the product we select to edit
    openModalUpdate = (childData, event) => {
        //assign the products different values to variables
        const prodItem = childData.item;
        const prodImg = childData.image;
        const prodId = childData.id;
        //set the product states to the current product, we use this to fill the modal with the current products information 
        //that way the user can see the current products information while they edit it
        this.setState({ modalIsOpenUpdate: true, item: prodItem, image: prodImg, id: prodId });
    }

    afterOpenModalUpdate = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }
    //this is a function that closes the update modal for products, it simply resets the product infos states and changes the state 
    //controlling the modal
    closeModalUpdate = () => {
        this.setState({ modalIsOpenUpdate: false, item: '', image: '' });
    }

    //this function submits the update product modal
    onSubmitUpdate = (e) => {
        //prevent from reloading instantly
        e.preventDefault();
        console.log(this.state.user)
        //assign the newly changed states as variables
        const item = this.state.item;
        const image = this.state.image;
        const id = this.state.id;
        //put the users jwt token into the axios request's header
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //send a put (update) request to the api routes, setting the id as a request parameter and sending the item name and image in the data
        axios.put('/api/updateProduct/' + id, { item, image })
            //if the product successfully updates
            .then((res) => {
                //set a jwt token in the header of a new axios request
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                //send a get request to get the new array of products tied to the user
                axios.get('/api/populateProducts/' + this.state.user.id)
                    .then((res) => {
                        //reset the product state to have the 
                        this.setState({ products: res.data, modalIsOpenUpdate: false, item: '', image: '', id: '' });
                        console.log(this.state)
                    })
                // this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })
    }
    //this opens the modal to create a new product
    openModalCreate = () => {
        //whether or not the modals are open is determined in the state
        this.setState({ modalIsOpenCreate: true });
    }

    afterOpenModalCreate = () => {

    }

    //this closes the modal to create a new product
    closeModalCreate = () => {
        //use state to close modal, reset the other states to clear them of any user input
        this.setState({ modalIsOpenCreate: false, item: '', image: '' });
    }
    
    //this function submits the new product to the server
    onSubmitCreate = (e) => {
        //prevents the page from reloading automatically
        e.preventDefault();
        console.log(this.state.user)
        //get the state of the the item and the item image
        const item = this.state.item;
        const image = this.state.image
        //add a header to the sxios request
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //send a post request to api-routes, sending the item name and image as data
        axios.post('/api/newProduct', { item, image })
        //after product is created
            .then((res) => {
                //add a header to an axios request
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                //send a get request to the api-routes with the users id as a request parameter
                axios.get('/api/populateProducts/' + this.state.user.id)
                //after getting the responde
                    .then((res) => {
                        //set a new products array with the new product in the state, close the modal, reset the item info
                        this.setState({ products: res.data, modalIsOpenCreate: false, item: '', image: '' });
                        console.log(this.state)
                    })
                // this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })
    }
    //this function deletes the selected product, this is passed as a prop to the product card
    //that way the delete button only deletes the targetted card
    onDeleteProducts = (childData) => {
        console.log('clicked');
        //get the id number of the product
        const id = childData.id;
        //add users jwt token to the axios request
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //send a delete request to the api-routes with the product id as a request parameter
        axios.delete('/api/deleteProduct/' + id)
        //after deletion
            .then((res) => {
                //set up a new request header with jwt token
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                //send a get request to api-routes with the users id as a request parameter
                axios.get('/api/populateProducts/' + this.state.user.id)
                    .then((res) => {
                        //reset the products array with a new array sans the deleted product
                        this.setState({ products: res.data })
                    })
            //handle errors        
            }).catch((err) => {
                console.log(err);
            })


    }

    //this function is for filling out add or edit forms, state is changed as forms are filled out/altered
    //all submit functions grab info from the state to send to the server
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    //the below 3 functions work very similarily to the above routes
    //they are here to control the modals opening and closing

    openModalCreateMarket = () => {
        this.setState({ modalIsOpenCreateMarket: true });
    }

    afterOpenModalCreateMarket = () => {

    }

    closeModalCreateMarket = () => {
        this.setState({ modalIsOpenCreateMarket: false, market: '', marketImage: '' });
    }

    //this function handles the client side form submit for a new market
    //again, very similar to the above onSubmitCreate
    onSubmitCreateMarket = (e) => {
        //prevent page from reloading on submit
        e.preventDefault();
        //get the new markets information from the state
        const marketName = this.state.market;
        const marketAddress = this.state.marketAddress;
        const marketTime = this.state.marketTime;
        const marketImage = this.state.marketImage;
        //add a request header to the axios request
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //send the post request to the server, with the markets information as data
        axios.post('/api/newMarket', { marketName, marketAddress, marketTime, marketImage })
        //after new market is created
            .then((res) => {
                //send a new get request with a jwt token in the header
                //you are now trying to populate the market on the page
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');  
                axios.get('/api/populateDashboardMarket/' + this.state.user.id)
                    .then((res) => {
                        this.setState({ markets: res.data, modalIsOpenCreateMarket: false, market: '', marketImage: '', marketTime: '', marketAddress: '' });
                        console.log(this.state)
                    })
                // this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })

    }



    openModalUpdateMarket = (childData, event) => {
        //assign the products different values to variables
        const marketName = childData.marketName;
        const marketAddress = childData.marketAddress;
        const marketTime = childData.marketTime;
        const marketImage = childData.marketImage;
        //set the product states to the current product, we use this to fill the modal with the current products information 
        //that way the user can see the current products information while they edit it
        this.setState({ modalIsOpenUpdateMarket: true, marketName: marketName, marketAddress: marketAddress, marketTime: marketTime, marketImage: marketImage });
    }

    closeModalUpdateMarket = () => {
        this.setState({ modalIsOpenUpdateMarket: false, market: '', marketImage: '', marketTime: '', marketAddress: '' });
    }

    //this function submits the update of the market modal
    onSubmitUpdateMarket = (e) => {
        //prevent from reloading instantly
        e.preventDefault();
        console.log(this.state.user)
        //assign the newly changed states as variables
        const marketName = this.state.marketName;
        const marketAddress = this.state.marketAddress;
        const marketTime = this.state.marketTime;
        const marketImage = this.state.marketImage;
        const id = this.state.user.id;
        //put the users jwt token into the axios request's header
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //send a put (update) request to the api routes, setting the id as a request parameter and sending the item name and image in the data
        axios.put('/api/updateMarket/' + id, { marketName, marketAddress, marketTime, marketImage })
            //if the product successfully updates
            .then((res) => {
                //set a jwt token in the header of a new axios request
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                //send a get request to get the new array of products tied to the user
                axios.get('/api/populateDashboardMarket/' + this.state.user.id)
                    .then((res) => {
                        //reset the product state to have the 
                        this.setState({ markets: res.data, modalIsOpenUpdateMarket: false, market: '', marketImage: '', marketTime: '', marketAddress: '' });
                        console.log(this.state)
                    })
                // this.props.history.push("/login");
            }).catch((err) => {
                console.log(err);
            })
    }

    onDeleteMarkets = () => {

    }


    render() {
        return (
            <div className='dashboard'>
                <div className='container'>
                <div className="container pb-5">

                <div className="row">

                    <div className="col-lg-3">

                        <h1 className="my-4 text-center">Shop Name</h1>

                        <Categories />

                    </div>

                    <div className="col-lg-9">

                        <Carousel />

                        <div className="row">
                        <div className='col'>
                        {this.state.loading ?
                        (null)
                        : this.state.user.userType === "Vendor" ?
                            (this.state.products[0] === undefined ?

                                (<div className="w-100">
                                    <div>
                                        <button className="btn btn-primary w-100 mb-3" onClick={this.openModalCreate} id="createProduct">Add a Product</button>
                                        <h6>You don{"'"}t have any products...Would you like to create one?</h6> 
                                    </div>
                                    
                                </div>)
                                : (<div className="">
                                    <div className="row">
                                        <div className='col'>
                                            <h1>Products</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {this.state.products.map(product => (
                                            <Product isDashboard={true}
                                                item={product.item}
                                                img={product.image}
                                                id={product.id}
                                                modalOpen={(e) => { this.openModalUpdate(product, e) }}
                                                deleteProduct={() => { this.onDeleteProducts(product) }}>
                                            </Product>
                                        ))}

                                            <div onClick={this.openModalCreate} id="createProduct" className="col-lg-4 col-md-6 mb-4">
                                                <div className="card row h-100 d-flex">
                                                    <div className='justify-content-center align-self-center'>
                                                        <i class="fas fa-plus plus-sign"></i>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                        
                                    {/* <button className="btn" >Add a Product</button> */}
                                    
                                    <Modal isOpen={this.state.modalIsOpenUpdate}
                                        onAfterOpen={this.afterOpenModalUpdate}
                                        onRequestClose={this.closeModalUpdate}
                                        // style={customStyles}
                                        contentLabel="Example Modal">
                                        <h2 ref={subtitle => this.subtitle = subtitle}>Edit Your Product</h2>
                                        <div>Product Information</div>
                                        <form onSubmit={this.onSubmitUpdate}>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="item">Product Name</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.state.item} onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="image">Image URL</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.state.image} onChange={this.onChange} required />
                                            </div>
                                            <button className="btn" type="submit">Submit</button>
                                        </form>
                                        <button className="btn" onClick={this.closeModalUpdate}>Cancel</button>
                                    </Modal>

                                </div>)
                            ) : this.state.markets === null ?
                            (<div>
                                <div>
                                    <button className="btn btn-primary w-100" onClick={this.openModalCreateMarket} id="createMarket">Add a Market</button>
                                    <h1>You don{"'"}t have a market.....Would you like to create one?</h1> 
                                </div>
                                <Modal  isOpen={this.state.modalIsOpenCreateMarket}
                                        onAfterOpen={this.afterOpenModalCreateMarket}
                                        onRequestClose={this.closeModalCreateMarket}
                                        // style={customStyles}
                                        contentLabel="Example Modal">
                                    <h2 ref={subtitle => this.subtitle = subtitle}>Add a new Market</h2>
                                                          
                                    <div>Market Information</div>
                                    <form onSubmit={this.onSubmitCreateMarket}>
                                        <div className="form-group mt-4 mb-5">
                                            <label htmlFor="market">Market Name</label>
                                            <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Market Name" name='market' value={this.state.market} onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group mt-4 mb-5">
                                            <label htmlFor="marketImage">Image URL</label>
                                            <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='marketImage' value={this.state.marketImage} onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group mt-4 mb-5">
                                            <label htmlFor="marketLocation">Market Location</label>
                                            <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Address" name='marketAddress' value={this.state.marketAddress} onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group mt-4 mb-5">
                                            <label htmlFor="marketTime">Market Schedule</label>
                                            <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Time" name='marketTime' value={this.state.marketTime} onChange={this.onChange} required/>
                                        </div>
                                        <button className="btn" type="submit">Submit</button>
                                    </form>
                                    <button className="btn" onClick={this.closeModalCreateMarket}>Cancel</button>
                                </Modal>
                                </div>)
                                :(<div>
                                    <MarketCardDashboard
                                        name={this.state.markets.marketName}
                                        marketLocation={this.state.markets.marketAddress}
                                        marketTime={this.state.markets.marketTime}
                                        modalOpen={(e) => { this.openModalUpdateMarket(this.state.markets, e) }}
                                        deleteMarket={() => { this.onDeleteMarkets(this.state.markets) }}>
                                    </MarketCardDashboard>
                                    <Modal 
                                        isOpen={this.state.modalIsOpenUpdateMarket}
                                        onAfterOpen={this.afterOpenModalUpdateMarket}
                                        onRequestClose={this.closeModalUpdateMarket}
                                        // style={customStyles}
                                        contentLabel="Example Modal">
                                        <h2 ref={subtitle => this.subtitle = subtitle}>Edit Your Market</h2>

                                        <div>Market Information</div>
                                        <form onSubmit={this.onSubmitUpdateMarket}>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="market">Market Name</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Market Name" name='marketName' value={this.state.marketName} onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="marketImage">Image URL</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='marketImage' value={this.state.marketImage} onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="marketLocation">Market Address</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Address" name='marketAddress' value={this.state.marketAddress} onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="marketLocation">Market Zip</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Zipcode" name='marketZip' value={this.state.marketZip} onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="marketTime">Market Schedule</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Schedule" name='marketTime' value={this.state.marketTime} onChange={this.onChange} required />
                                            </div>
                                            <button className="btn" type="submit">Submit</button>
                                        </form>
                                        <button className="btn" onClick={this.closeModalUpdateMarket}>Cancel</button>
                                    </Modal>
                                </div>)}
                                <Modal isOpen={this.state.modalIsOpenCreate}
                                        onAfterOpen={this.afterOpenModalCreate}
                                        onRequestClose={this.closeModalCreate}
                                        // style={customStyles}
                                        contentLabel="Example Modal">
                                        <h2 ref={subtitle => this.subtitle = subtitle}>Add a new Product to your inventory</h2>
                                        <form onSubmit={this.onSubmitCreate}>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="item">Product Name</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.state.item} onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <label htmlFor="image">Image URL</label>
                                                <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.state.image} onChange={this.onChange} required />
                                            </div>
                                            <button className="btn btn-primary px-3" type="submit">Submit</button>
                                            <button className="btn btn-danger mx-2 px-3" onClick={this.closeModalCreate}>Cancel</button>
                                        </form>
                                        
                                    </Modal>
                            </div>


                        </div>
                        {/* <!-- /.row --> */}

                    </div>
                    {/* <!-- /.col-lg-9 --> */}

                </div>
                {/* <!-- /.row --> */}

                </div>
                    
                </div>
            </div>
        )
    }
}
export default Dashboard;





















// First
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
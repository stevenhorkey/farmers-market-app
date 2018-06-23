import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './FarmersPage.css';
import Product from '../../components/products/product/Product';


class FarmersPage extends Component {

    state = {
        loading: true,
        farmer: [],
        products: []

    }

    componentDidMount() {
        console.log(this.state)
        console.log(this.props.farmerID)
        axios.get('/api/populateFarmerPage/' + this.props.farmerID)
            .then((res) => {
                // console.log(res)
                this.setState({
                    farmer: res.data
                });

                axios.get('/api/populateProducts/' + this.state.farmer.id)
                    .then((result) => {
                        // console.log(result)
                        this.setState({
                            products: result.data,
                            loading: false
                        })
                        console.log(this.state)
                    })


            })
    }


    render() {

        // let farmersName = this.state.farmer.firstName;

        // let productName = this.state.products[0].item;


        return (

            this.state.loading ?

                (null)


                : (<container>

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3">

                                <h1 className="my-4">{this.state.farmer.firstName}</h1>

                                {/* <FarmerPhoto /> */}
                                {/* <FarmerBio /> */}

                            </div>

                            <div className="col-lg-9">

                                <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                                <div className="row">

                                    {this.state.products.map(product => (
                                        <Product
                                            img={product.image}
                                        />
                                    ))}


                                </div>
                                {/* <!-- /.row --> */}

                            </div>
                            {/* <!-- /.col-lg-9 --> */}

                            </div>
                         {/* <!-- /.row --> */}

                    </div>
                </container>)
        )
    }
}

export default FarmersPage;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './FarmersPage.css';
import Product from '../../components/products/product/Product';
import Carousel from '../../components/carousel/Carousel';
import FarmerCard from '../../components/farmers/farmerCard/FarmerCard';

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


                : (

                    <div className="container pb-5">

                        <div className="row">

                            <div className="col-lg-3">
                                <h2>ABOUT THIS VENDOR</h2>
                                // should maybe be vendor name not first name and last name ie company or farm name 
                                <h2 className="my-4 text-center">{this.state.farmer.firstName} {this.state.farmer.lastName}</h2>

                                <FarmerCard />


                            </div>

                            <div className="col-lg-9">

                                <Carousel />


                                <div className="row mb-4">
                                    <button className='w-100 mx-3 btn btn-primary'>Add an item</button>
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
                )
        )
    }
}

export default FarmersPage;

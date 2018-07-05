import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './FarmersPage.css';
import Product from '../../components/products/product/Product';
import Carousel from '../../components/carousel/Carousel';
import FarmerCard from '../../components/farmers/farmerCard/FarmerCard';
// import '../assets/images/wood.jpg';

class FarmersPage extends Component {

    state = {
        loading: true,
        farmer: [],
        products: []

    }

    componentDidMount() {
        console.log(this.state)
        console.log(this.props.farmerID)
        axios.get('/api/populateFarmerPage/' + )
            //need to finish this ^^^^^
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



        return (

            this.state.loading ?

                (null)


                : (

                    <div className="container pb-5">

                        <div className="row">

                            <div className="col-lg-3">
                                <h2><strong>About This Vendor</strong></h2>
                                {/* // should maybe be vendor name not first name and last name ie company or farm name  */}

                                <h2 className="my-4 text-center">{this.state.farmer.firstName} {this.state.farmer.lastName}</h2>

                                <FarmerCard />


                            </div>

                            <div className="col-lg-9">

                                <Carousel />

                                <div className="row">


                                    {this.state.products.map(product => (
                                        <Product
                                            img={this.state.products.img}
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

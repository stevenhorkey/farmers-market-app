import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './FarmersPage.css';
import Product from '../../components/products/product/Product';
import Carousel from '../../components/carousel/Carousel';
import FarmerPhoto from '../../components/farmers/farmerPhoto/FarmerPhoto';

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

                                <h2 className="my-4 text-center">{this.state.farmer.firstName} {this.state.farmer.lastName}</h2>

                                <FarmerPhoto />
                                {/* <FarmerBio /> */}

                            </div>

                            <div className="col-lg-9">

                                <Carousel/>

                                <div className="row">

                                    <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                                    <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                                    <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                                    <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
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

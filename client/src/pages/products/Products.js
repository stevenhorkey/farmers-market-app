import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/products/product'
import Categories from '../../components/products/categories'
import Carousel from '../../components/carousel/Carousel';
import SearchBar from '../../components/products/searchbar';

class Products extends Component {

    state = {
        category: '',
        market: '',
        products: [],
        searchInput: ''
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };

    submitSearch = (event) => {
        event.preventDefault();

        var category = this.state.category;
        var market = this.state.market;
        var searchInput = this.state.searchInput;

        axios.get('...',{
        // Ready to edit and use ^^^
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    componentDidMount = () => {
        if(this.state.searchInput !== ''){
            this.submitSearch();
        }
    }

    render() {

        return (
            <div className="container pb-5">

                <div className="row">

                    <div className="col-lg-3">

                        <h1 className="my-4">Shop Name</h1>

                        <Categories />

                    </div>

                    <div className="col-lg-9">

                        <div className='mt-4'>
                            <SearchBar
                            handleChange={this.handleChange}
                            searchInput={this.state.searchInput}
                            />
                        </div>

                        <Carousel />

                        <div className="row">

                            <Product 
                            title='Item 1' 
                            price='24.99' 
                            description='This is a description' 
                            img='http://placehold.it/700x400' 
                            />
                            <Product 
                            title='Item 1' 
                            price='24.99' 
                            description='This is a description' 
                            img='http://placehold.it/700x400' 
                            />
                            <Product 
                            title='Item 1' 
                            price='24.99' 
                            description='This is a description' 
                            img='http://placehold.it/700x400' 
                            />
                            <Product 
                            title='Item 1' 
                            price='24.99' 
                            description='This is a description' 
                            img='http://placehold.it/700x400' 
                            />
                            <Product 
                            title='Item 1' 
                            price='24.99' 
                            description='This is a description' 
                            img='http://placehold.it/700x400' 
                            />

                        </div>
                        {/* <!-- /.row --> */}

                    </div>
                    {/* <!-- /.col-lg-9 --> */}

                </div>
                {/* <!-- /.row --> */}

            </div>
        )
    }
}

export default Products;

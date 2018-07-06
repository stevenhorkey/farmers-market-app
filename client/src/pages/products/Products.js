import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/products/product'
import Categories from '../../components/products/categories'
import Carousel from '../../components/carousel/Carousel';
import SearchBar from '../../components/products/searchbar';
import Sidebar from '../../components/sidebar/Sidebar'

class Products extends Component {

    state = {
        category: '',
        market: '',
        products: [],
        searchInput: '',
        nearbyMarkets: [],
        loading: true
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

        axios.get('/api/products',{
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

        axios.get('/api/populateProducts',{
            // Ready to edit and use ^^^
            }).then(res => {
                let productsArray = res.data;
                axios.get('/api/getSidebarMarkets')
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        loading: false,
                        products: productsArray,
                        nearbyMarkets: res.data
                    })
                })
               
            }).catch(err => {
                console.log(err);
            })

    }

    sortByMarket = (e, marketId) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        console.log(marketId)
        axios.get('/api/filterProductsByMarket/' + marketId)
        .then((res) => {
            this.setState({products: res.data})
        })
    }

    render() {
        const productLinks = [];

        this.state.nearbyMarkets.map((market) => {
            let linkObj = { name: market.marketName,
                            onClick: this.sortByMarket, 
                            marketId: market.id};
            productLinks.push(linkObj);
        })
                

        if (this.state.loading){
            return (null)
        } else {
            let products = this.state.products;
            return (
                <div className="container pb-5">
    
                    <div className="row">
    
                        <div className="col-lg-3">
    
                            <h1 className="my-4">Shop Name</h1>
    
                            <Sidebar links = {productLinks}/>
    
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
    
    
                                {/* This map function is ready to be adjusted as needed */}
                                {products.map((element,key) => {
                                    return(
                                        <Product 
                                        item={element.item} 
                                        // price={element.price} 
                                        // description={element.description} 
                                        img={element.image}
                                        id={key} 
                                        />
                                    )
                                })}
    
                                {/* <Product 
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
                                /> */}
    
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
}

export default Products;

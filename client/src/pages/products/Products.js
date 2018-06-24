import React, { Component } from 'react';

import Product from '../../components/products/product'
import Categories from '../../components/products/categories'
import Carousel from '../../components/carousel/Carousel';
import SearchBar from '../../components/products/searchbar';

class Products extends Component {
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
                            <SearchBar />
                        </div>

                        <Carousel />

                        <div className="row">

                            <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                            <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                            <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                            <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />
                            <Product title='Item 1' price='24.99' description='This is a description' img='http://placehold.it/700x400' />



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

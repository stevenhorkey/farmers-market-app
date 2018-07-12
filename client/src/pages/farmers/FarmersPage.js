import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './FarmersPage.css';
import Product from '../../components/products/product/Product';
import Carousel from '../../components/carousel/Carousel';
import FarmerCard from '../../components/farmers/farmerCard/FarmerCard';
// import '../assets/images/wood.jpg';

import img1 from '../../assets/images/img14.jpg';
import img2 from '../../assets/images/img7.jpg';
import img3 from '../../assets/images/img10.jpg';

import Fade from 'react-reveal/Fade';

class FarmersPage extends Component {

    state = {
        loading: true,
        farmer: [],
        products: [],
        markets: []

    }

    getUrlVars()
  {
      var vars = {}, hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1);
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          vars[hash[0]] = hash[1];
      }
      return hashes;
  }

    componentDidMount() {
        console.log(this.state)
        console.log(this.props.farmerID)
        console.log(this.getUrlVars());
        var queryNumber = this.getUrlVars();

        axios.get('/api/populateFarmerPage/' + queryNumber)
            .then((res) => {
                // console.log(res)    
                let farmerData = res.data
            
                axios.get('/api/populateProducts/' + farmerData.id)
                    .then((result) => {
                        let productData = result.data
                        axios.get('/api/getAssociatedMarkets/' + farmerData.id)
                        .then((marketResults) => {
                            console.log(result.data)
                            this.setState({
                            products: productData,
                            loading: false,
                            farmer: farmerData,
                            markets: marketResults.data
                        })
                        console.log(this.state)
                        })
                      
                        
                    })


            })
    }


    render() {

        const profileImg = this.state.farmer.profileImage;
        const style = {
            backgroundImage: 'url(' + profileImg + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            borderRadius: '50%',
            paddingTop: '100%',
            marginBottom: '1rem',
            border: 'solid 2px #1d586b'
        }

        return (

            this.state.loading ?

                (null)


                : (

                    <div className="container py-4">

                        <div className="row">

                            <Fade bottom>
                            <div className="col-lg-3">
                            <h1 className="my-3 bhs text-center">{this.state.farmer.firstName} {this.state.farmer.lastName}</h1>
                                {/* // should maybe be vendor name not first name and last name ie company or farm name  */}
                                <img className="profileImg"  style = {style}/>
                                <FarmerCard 
                                            bio = {this.state.farmer.bio}
                                            markets = {this.state.markets}/>


                            </div>
                            </Fade>

                            <div className="col-lg-9">

                                <Carousel
                                img1={img1}
                                img2={img2}
                                img3={img3}
                                />

                                <div className="row">


                                    {this.state.products.map(product => (
                                        <Product
                                            img={product.image}
                                            item={product.item}
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

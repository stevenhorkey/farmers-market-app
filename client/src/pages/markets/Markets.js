import React, { Component } from 'react';
import axios from 'axios';
import Carousel from '../../components/carousel/Carousel';
import SearchBar from '../../components/products/searchbar';
import FarmerCardMarketPage from '../../components/farmers/farmerCardMarketPage/';

import img1 from '../../assets/images/img14.jpg';
import img2 from '../../assets/images/img8.jpg';
import img3 from '../../assets/images/img17.jpg';

import Fade from 'react-reveal/Fade';

class Markets extends Component {
    state = {
        loading: true,
        market: [],
        farmers: []
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
        let queryNumber = this.getUrlVars();
        axios.get('/api/populateMarketPage/' + queryNumber)
            .then((res) => {
                // console.log(res)
                const marketData = res.data;

                axios.get('/api/populateFarmers/' + marketData.id)
                    .then((result) => {
                        // console.log(result)
                        this.setState({
                            farmers: result.data,
                            loading: false,
                            market: marketData
                        })
                        console.log(this.state)
                    })
            })
    }
    render() {

        const style ={

            'marketImg': {
                backgroundImage: 'url(' + this.state.market.marketImage + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: '150px'
            }
        }
        return (
            this.state.loading ?
                (null)
                :


                (<div className="container pb-5">
                        <div className="row">
                            <Fade bottom>
                            <div className="col-lg-3">
                            {/* <h1 className="my-4 bhs text-center">About This Market</h1> */}
                                {/* // should maybe be vendor name not first name and last name ie company or farm name  */}

                                <h1 className="mt-5 mb-4 bhs text-center">{this.state.market.marketName}</h1>
                                {/* <img className="profileImg"  style = {style}/> */}
                                <div className="card">
                                    <div className='card-header sidebarHeader text-center'>Market Information</div>
                                    <div className = "card-img-top" style = {style.marketImg}></div>
                                    <div className="card-body text-center">
                                        <h4 className='bhs'>Market Location</h4>
                                        <p>{this.state.market.marketAddress}</p>
                                        <h4 className='bhs'>Market Schedule</h4>
                                        <p className='mb-0'>{this.state.market.marketTime}</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>

                            <div className="col-lg-9 mt-4">

                                <Carousel
                                img1={img1}
                                img2={img2}
                                img3={img3}
                                />

                                <div className="row">
                                    {  
                                        this.state.farmers.map((farmer, key)=>{
                                        return(

                                            <FarmerCardMarketPage
                                                img={farmer.profileImage}
                                                farmerId={farmer.id}
                                                farmerName={farmer.firstName + ' ' + farmer.lastName}
                                            />
                                        )
                                    })}



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
export default Markets;
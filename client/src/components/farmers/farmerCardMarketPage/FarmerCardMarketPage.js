import React, { Component } from 'react';
import './FarmerCardMarketPage.css';

import Flip from 'react-reveal/Flip';

class FarmerCardMarketPage extends Component {
    render(){
        const style = {
            farmerImg: {
                backgroundImage: 'url('+ this.props.img + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                paddingTop: '100%'
            }
        }
        return(
            <Flip bottom>
            <div className="col-lg-4 col-md-6 mb-4" key={this.props.id}>
                <a href={"/farmerspage/?" + this.props.farmerId}>
                    <div className="card h-100 on-hover">
                        <img className="card-img-top" style={style.farmerImg}/>
                        <div className="card-body">
                            <h4 className="card-title text-center text-capitalize">
                                {this.props.farmerName}
                            </h4>
                            <h5>{this.props.price}</h5>
                            <p className="card-text">{this.props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
            </Flip>
        )
    }
}

export default FarmerCardMarketPage;
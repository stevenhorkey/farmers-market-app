import React, { Component } from 'react';

class Product extends Component{
    render(){
        return(
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={this.props.img} alt=""/></a>
                    <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{this.props.title}</a>
                    </h4>
                    <h5>{this.props.price}</h5>
                    <p className="card-text">{this.props.description}</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
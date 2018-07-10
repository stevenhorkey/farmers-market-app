import React, { Component } from 'react';
import './Product.css';



class Product extends Component {
    render() {

        const style = {
            productImg: {
                backgroundImage: 'url('+this.props.img+')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                paddingTop: '100%'
            }
        }

        return (
            <div className="col-lg-4 col-md-6 mb-4" key={this.props.id}>
                {this.props.isDashboard ? (<div className="card h-100">
                                            <div className="card-img-top" style={style.productImg}></div>
                                            <div className="card-body">
                                            <h4 className="card-title text-center text-capitalize">
                                                {this.props.item}
                                            </h4>
                                            <h5>{this.props.price}</h5>
                                            <p className="card-text">{this.props.description}</p>
                                            </div>
                                            <div className="card-footer">
                                                {this.props.isDashboard ? <div>
                                                                            <div className = "btn btn-primary edit-button w-100 col-10" onClick={this.props.modalOpen} data-id={this.props.id}> Edit </div>
                                                                            <div className = "btn btn-danger delete-button w-100 col-2" onClick={this.props.deleteProduct} data-id={this.props.id}><i className="far fa-times-circle"></i></div>
                                                                            
                                                                        </div>
                                                                        : (null)}
                                            </div>
                                        </div>)
                                        :(<a href={"/farmerspage/?" + this.props.userId}>
                                            <div className="card h-100">
                                                <img className="card-img-top" style={style.productImg}/>
                                                <div className="card-body">
                                                <h4 className="card-title text-capitalize">
                                                    {this.props.item}
                                                </h4>
                                                <h5>{this.props.price}</h5>
                                                <p className="card-text">{this.props.description}</p>
                                                </div>
                                            </div>
                                            </a>)}
                
            </div>
        )
    }
}

export default Product;
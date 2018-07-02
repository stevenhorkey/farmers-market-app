import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={this.props.img} alt="" /></a>
                    <div className="card-body">
                    <h4 className="card-title">
                        {this.props.item}
                    </h4>
                    <h5>{this.props.price}</h5>
                    <p className="card-text">{this.props.description}</p>
                    </div>
                    <div className="card-footer">
                        {this.props.isDashboard ? <div>
                                                    <div className = "btn btn-primary edit-button" onClick={this.props.modalOpen} data-id={this.props.id}> Edit Button </div>
                                                    <div className = "btn delete-button" onClick={this.props.deleteProduct} data-id={this.props.id}><i className="far fa-times-circle"></i></div>
                                                  </div>
                                                : (null)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
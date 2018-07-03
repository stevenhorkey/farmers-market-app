import React, { Component } from 'react';

class CreateProduct extends Component{
    render(){
        return(
            <div onClick={this.props.openModalCreate} id="createProduct" className="col-lg-4 col-md-6 mb-4">
                <div className="card row h-100 d-flex">
                    <div className='justify-content-center align-self-center'>
                        <i className="fas fa-plus plus-sign"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProduct;
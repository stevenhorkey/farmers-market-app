import React, { Component } from 'react';

import Flip from 'react-reveal/Flip';

class CreateProduct extends Component{
    render(){
        return(
            <Flip bottom>
            <div onClick={this.props.openModalCreate} id="createProduct" className="col-lg-4 col-md-6 mb-4">
                <div className="card row h-100 d-flex m-0 on-hover">
                    <div className='justify-content-center align-self-center my-auto'>
                        <i className="fas fa-plus plus-sign"></i>
                    </div>
                </div>
            </div>
            </Flip>
        )
    }
}

export default CreateProduct;
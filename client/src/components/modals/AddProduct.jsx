import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import axios from 'axios';


class AddProduct extends Component{

    render(){
        return(
            <Modal isOpen={this.props.modalIsOpenCreate}
                onAfterOpen={this.props.afterOpenModalCreate}
                onRequestClose={this.props.closeModalCreate}
                // style={customStyles}
                contentLabel="Example Modal">
                <h2>Add a new Product to your inventory</h2>
                <form onSubmit={this.props.onSubmitCreate}>
                    <div className="form-group mt-4 mb-5">
                        <label htmlFor="item">Product Name</label>
                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.props.item} onChange={this.props.onChange} required />
                    </div>
                    <div className="form-group mt-4 mb-5">
                        <label htmlFor="image">Image URL</label>
                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.props.image} onChange={this.props.onChange} required />
                    </div>
                    <button className="btn btn-primary px-3" type="submit">Submit</button>
                    <button className="btn btn-danger mx-2 px-3" onClick={this.props.closeModalCreate}>Cancel</button>
                </form>
                
            </Modal>
        )
    }
}

export default AddProduct;
import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import axios from 'axios';


class EditProduct extends Component{

    render(){
        return(
            <Modal isOpen={this.props.modalIsOpenUpdate}
                onAfterOpen={this.props.afterOpenModalUpdate}
                onRequestClose={this.props.closeModalUpdate}
                // style={customStyles}
                contentLabel="Example Modal">
                <h2>Edit Your Product</h2>
                <div>Product Information</div>
                <form onSubmit={this.props.onSubmitUpdate}>
                    <div className="form-group mt-4 mb-5">
                        <label htmlFor="item">Product Name</label>
                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Product Name" name='item' value={this.props.item} onChange={this.props.onChange} required />
                    </div>
                    <div className="form-group mt-4 mb-5">
                        <label htmlFor="image">Image URL</label>
                        <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='image' value={this.props.image} onChange={this.props.onChange} required />
                    </div>
                    <button className="btn" type="submit">Submit</button>
                </form>
                <button className="btn" onClick={this.props.closeModalUpdate}>Cancel</button>
            </Modal>
        )
    }
}

export default EditProduct;
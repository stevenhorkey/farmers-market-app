import React, { Component, Fragment } from 'react';
import Modal from 'react-modal'
import axios from 'axios';

class AddMarket extends Component{

    render(){
        return(
        <Modal isOpen={this.props.modalIsOpenCreateMarket}
                onAfterOpen={this.props.afterOpenModalCreateMarket}
                onRequestClose={this.props.closeModalCreateMarket}
                // style={customStyles}
                contentLabel="Example Modal">
            <h2>Add a new Market</h2>
                                    
            <div>Market Information</div>
            <form onSubmit={this.props.onSubmitCreateMarket}>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="market">Market Name</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Market Name" name='marketName' value={this.props.marketName} onChange={this.props.onChange} required/>
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketImage">Image URL</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='marketImage' value={this.props.marketImage} onChange={this.props.onChange} required/>
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketLocation">Market Location</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Address" name='marketAddress' value={this.props.marketAddress} onChange={this.props.onChange} required/>
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketTime">Market Schedule</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Time" name='marketTime' value={this.props.marketTime} onChange={this.props.onChange} required/>
                </div>
                <button className="btn btn-primary px-3" type="submit">Submit</button>
                <button className="btn btn-danger mx-2 px-3" onClick={this.props.closeModalCreateMarket}>Cancel</button>
            </form>
        </Modal>
        )
    }
}

export default AddMarket;
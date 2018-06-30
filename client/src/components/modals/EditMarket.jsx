import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import axios from 'axios';


class EditMarket extends Component{

    render(){
        return(
        <Modal 
            isOpen={this.props.modalIsOpenUpdateMarket}
            onAfterOpen={this.props.afterOpenModalUpdateMarket}
            onRequestClose={this.props.closeModalUpdateMarket}
            // style={customStyles}
            contentLabel="Example Modal">
            <h2>Edit Your Market</h2>

            <div>Market Information</div>
            <form onSubmit={this.props.onSubmitUpdateMarket}>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="market">Market Name</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="item" placeholder="Market Name" name='marketName' value={this.props.marketName} onChange={this.props.onChange} required />
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketImage">Image URL</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Image URL" name='marketImage' value={this.props.marketImage} onChange={this.props.onChange} required />
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketLocation">Market Address</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Address" name='marketAddress' value={this.props.marketAddress} onChange={this.props.onChange} required />
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketLocation">Market Zip</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Zipcode" name='marketZip' value={this.props.marketZip} onChange={this.props.onChange} required />
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="marketTime">Market Schedule</label>
                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" aria-describedby="imageURL" placeholder="Market Schedule" name='marketTime' value={this.props.marketTime} onChange={this.props.onChange} required />
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
            <button className="btn" onClick={this.props.closeModalUpdateMarket}>Cancel</button>
        </Modal>
        )
    }
}

export default EditMarket;
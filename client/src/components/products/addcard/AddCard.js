import React, { Component } from 'react';
import './AddCard.css'

class AddCard extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div id='addCard' className="card row h-100 d-flex">
                    <div className='justify-content-center align-self-center'>
                        <i className="fas fa-plus plus-sign"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCard;
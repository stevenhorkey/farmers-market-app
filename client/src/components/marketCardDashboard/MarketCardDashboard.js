import React, { Component, Fragment } from 'react';
import './MarketCardDashboard.css';

class MarketCardDashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className='col'>
                        <h1 className='bhs text-center'>My Market</h1>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" style={this.props.style}></img>
                        <div className="card-body">
                            <h3 className="card-title text-center">{this.props.name}</h3>
                            <p className="card-text text-center">{this.props.marketLocation}</p>
                            <p className="card-text text-center">{this.props.marketTime}</p>
                        </div>
                        <div className="card-footer">
                        <div className = "btn btn-primary edit-button w-100" onClick={this.props.modalOpen} data-id={this.props.id}>Edit Market</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MarketCardDashboard;

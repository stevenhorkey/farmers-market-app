import React, { Component } from 'react';

class MarketCardDashboard extends Component {
    render() {
        return (
            <div className="col mb-4 d-inline">
            <div className="card h-100">
                <div className="card-body">
                    <h3 className="card-title text-center">{this.props.name}</h3>
                    <p className="card-text text-center">{this.props.marketLocation}</p>
                    <p className="card-text text-center">{this.props.marketTime}</p>
                </div>
                <div className="card-footer">
                    <div className = "btn btn-primary edit-button" onClick={this.props.modalOpen} > Edit Market </div>
                </div>
            </div>
            </div >

        )
    }
}

export default MarketCardDashboard;

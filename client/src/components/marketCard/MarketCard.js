import React, { Component } from 'react';

class MarketCard extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-4 d-inline">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title text-center">{this.props.marketName}</h3>
                        <p className="card-text text-center">{this.props.marketLocation}</p>
                        <p className="card-text text-center">{this.props.marketTime}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div >
        )
    }
}

export default MarketCard;


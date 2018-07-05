import React, { Component } from 'react';
// import('FarmerCard.css');

class FarmerCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (


            <div className="card">
                <div className="card">
                    <div className="img-container">
                        <img src={this.props.profileImage} />
                    </div>
                </div>
                <div className="bio-container">

                    <div>
                        <h4>You can find this vendor next at the:</h4>
                        <h4 className="market-container"><i>{this.props.marketName}</i></h4>
                        <ul>
                            <li>
                                {this.props.marketLocation}
                            </li>
                            <li>
                                {this.props.marketTime}
                            </li>

                        </ul>
                        <div>
                            <p className="bio-container">{this.props.bio}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FarmerCard;
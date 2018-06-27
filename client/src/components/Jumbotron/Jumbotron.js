import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component {
  render() {
    return (

      <header className="masthead d-flex">
        <div className="overlay"></div>
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1 className="bhs">{this.props.firstName}{this.props.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
      </header >
    )
  }
}
export default Jumbotron;

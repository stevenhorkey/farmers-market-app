import React, { Component } from 'react';

import './Carousel.css';


class Carousel extends Component {

    style = {
        img1: {
            backgroundImage: 'url(' + this.props.img1 + ')'
        },
        img2: {
            backgroundImage: 'url(' + this.props.img2 + ')'
        },
        img3: {
            backgroundImage: 'url(' + this.props.img3 + ')'
        }
    }


    render() {
        return (

            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        {/* <img className="d-block img-fluid" style={style.carousel} src={fm1} alt="First slide"/> */}
                        <div className="d-block img-fluid c-item" style={this.style.img1} alt="First slide"></div>
                    </div>
                    <div className="carousel-item">
                        {/* <img className="d-block img-fluid" style={this.style.carousel} src={fm1} alt="Second slide"/> */}
                        <div className="d-block img-fluid c-item" style={this.style.img2} alt="Second slide"></div>
                    </div>
                    <div className="carousel-item">
                        {/* <img className="d-block img-fluid" style={this.style.carousel} src={fm1} alt="Third slide"/> */}
                        <div className="d-block img-fluid c-item" style={this.style.img3} alt="Third slide"></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;
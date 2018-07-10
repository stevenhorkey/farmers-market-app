import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className='mt-5'>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                    <li className="list-inline-item">
                        <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                        </a>
                    </li>
                    </ul>
                    <p className="copyright text-white mt-3 bhs">Copyright &copy; {this.props.siteName} 2018</p>
                    <p className="copyright text-white mt-3 subheading">Designed and built by Steven Horkey, Colin Nelson, Matt Killian, Patricia Martinez, & RJ Vasquez</p>
                </div>
                </div>
            </div>
            </footer>
        )
    }
}

export default Footer;

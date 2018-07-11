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
                    <p className="copyright text-white mt-3 subheading">Designed and built by <a className="text-white" target="_blank" href="https://www.linkedin.com/in/steven-horkey/"> Steven Horkey </a>,<a className="text-white" target="_blank" href="https://www.linkedin.com/in/cncodes/"> Colin Nelson </a>,<a className="text-white" target="_blank" href="https://www.linkedin.com/in/killianmatthew/"> Matt Killian </a>,<a className="text-white" target="_blank" href="https://www.linkedin.com/in/patricia-martinez-dev/"> Patricia Martinez </a>, & <a className="text-white" target="_blank" href="https://www.linkedin.com/in/rene-vasquez-296856149/"> RJ Vasquez </a></p>
                </div>
                </div>
            </div>
            </footer>
        )
    }
}

export default Footer;

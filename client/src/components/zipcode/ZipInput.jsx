import React, { Component } from 'react';

// import './SearchBar.css';

class ZipInput extends Component {

    render() {
        return (
            <div className="input-group mb-3">
<<<<<<< HEAD
=======

>>>>>>> ee76cb573f93e813620e5e0abad8f68bca395181
                <input type="text"
                    name='zipInput'
                    onChange={this.props.handleChange}
                    value={this.props.zipInput}
                    className="form-control text-center" placeholder="Search"
<<<<<<< HEAD
=======

>>>>>>> ee76cb573f93e813620e5e0abad8f68bca395181
                />
                <div className="input-group-append">
                    <button onClick={this.props.submitZip} className="search-btn btn  btn-primary px-3" type="button"><i className="fas fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default ZipInput;
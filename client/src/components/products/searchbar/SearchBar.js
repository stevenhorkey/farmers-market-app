import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component{

    render(){
        return(
            <div className="input-group mb-3">
                <input type="text" 
                name='searchInput'
                onChange={this.props.handleChange}
                value={this.props.searchInput}
                className="form-control" placeholder="Search thousands of local items in your area..." aria-label="Search..." aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button onClick={this.props.submitSearch} className="search-btn btn  btn-primary px-3" type="button">Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;
import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary px-3" type="button">Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;
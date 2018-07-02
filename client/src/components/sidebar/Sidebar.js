import React, { Component } from 'react';

class Sidebar extends Component{

    onClick = (parentFunction, e) => {
        //prevent from reloading instantly
        e.preventDefault();
        parentFunction();
    }

    render(){
        return(
            <div className="list-group">
                {this.props.links.map(link => {
                    console.log(link.onClick)
                    let parentFunction = link.onClick;
                    return(<a href="#" className="list-group-item" onClick = {(e) => {this.onClick(parentFunction, e)}}>{link.name}</a>)
                    })
                }
            </div>
        )
    }
}

export default Sidebar;
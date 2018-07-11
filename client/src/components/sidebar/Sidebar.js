import React, { Component } from 'react';

import './Sidebar.css'

class Sidebar extends Component{

    render(){

        return(
            <div className="stickySidebar">
                <h1 className="my-4 bhs text-center">{this.props.title}</h1>
                <div className="card cardBorder sidebarCard">
                <h6 className="card-header sidebarHeader text-center">Refine by {this.props.refine}</h6>
                    <ul className="list-group list-group-flush">
                    {this.props.links.map(link => {
                    // console.log(link.onClick)
                    let parentFunction = link.onClick;
                    let args;
                    if(link.marketId){
                        args = [link.marketId]
                    }
                    else{
                        args = []
                    }
                    
                    return(<li class="list-group-item"><a href="#" className="card-link" onClick = {(e) => {parentFunction(e, ...args)}}>{link.name}</a></li>)
                    })
                    }
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Sidebar;
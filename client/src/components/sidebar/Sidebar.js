import React, { Component, Fragment } from 'react';

import './Sidebar.css';

class Sidebar extends Component{

    render(){
        console.log(this.props.requests.length)
        return(
            <div className="list-group">
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
                    
                    return(
                        <Fragment>
                            <a href="/#" className="list-group-item h-100" onClick = {(e) => {parentFunction(e, ...args)}}>
                                <span className=''>{link.name}</span>
                                {link.name === 'Manage Vendors' && this.props.requests.length > 0 ? 
                                        (<span id='sidebar-notification' class="fa-stack fa-1x float-right">
                                            <i id='notification-circle' class="fa fa-circle fa-stack-1x"></i>
                                            <strong id='notification-number' class="fa-stack-1x text-white">{this.props.requests.length}</strong>
                                        </span>)
                                : (null)
                                }
                            </a>
                            
                        </Fragment>
                    )
                    })
                }
            </div>
        )
    }
}

export default Sidebar;
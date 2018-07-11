import React, { Component, Fragment } from 'react';

import './Sidebar.css';

class Sidebar extends Component{

    render(){
        return(
            <div className="list-group">
                {this.props.links.map(link => {
                    // console.log(link.onClick)
                    let parentFunction = link.onClick;
                    let args;
                    var aLink;
                    if(link.marketId){
                        args = [link.marketId]
                    }
                    else{
                        args = []
                    }
                    if(link.urlLink){
                        aLink = link.urlLink
                    } else {
                        aLink = '/'+link.name;
                    }
                    return(
                        <Fragment>
                            <a href={aLink} className="list-group-item h-100" onClick = {(e) => {parentFunction(e, ...args)}}>
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
import React, { Component } from 'react';

class Sidebar extends Component{

    render(){
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
                    
                    return(<a href="/#" className="list-group-item" onClick = {(e) => {parentFunction(e, ...args)}}>{link.name}</a>)
                    })
                }
            </div>
        )
    }
}

export default Sidebar;
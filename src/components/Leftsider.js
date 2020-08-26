import React, { Component } from 'react'


import {Link} from 'react-router-dom'
class Leftsider extends Component {
        
    render() {
        return (
          
            <div>
                <div className="leftsider col-2" >
                    
                        <div className="menu-div">
                        <Link className="menu" to="/" >
                            Dashboard
                        </Link>
                        <Link className="menu" to="/classes">
                        
                        Classes
                        
                        </Link>
                        <Link className="menu" to="/resources">
                     
                        Resources
                        
                        </Link>
                        <Link className="menu" to="/learningplan">
                        
                        Learning Plan
                    
                        
                        
                        </Link>
                        <Link className="menu" to="/chat">
                        
                        Chat
                       
                        
                        </Link>
                        <Link className="menu" to="/settings">
                        
                        Settings
                        
                        </Link>
                    </div>
                    
                </div>
            </div>
           
        )
    }
}

export default Leftsider

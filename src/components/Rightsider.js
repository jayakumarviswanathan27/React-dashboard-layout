
import React, { Component } from 'react'

import { Avatar } from 'antd';
import { Button } from 'antd';

export class Rightsider extends Component {
   
    
    render() {
        return (
            <div>
                <div className="rightsider col-3" >
                    <div>
                <Button block style={{border:"none"}}>Logout</Button>
                </div>   
                <div className="avatar-right-sidebar"><Avatar size={140}  src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"/></div>                 
                <div className="Student-right-sidebar">
                    <b>Cham Fernas</b><br/>
                    Student
                </div>
             </div>  
            </div>
        )
    }
}

export default Rightsider

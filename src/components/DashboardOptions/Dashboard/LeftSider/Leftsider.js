import React, { Component } from 'react'
import "./LeftSider.css"
import Button from 'react-bootstrap/Button'

import {Link} from 'react-router-dom'
import {FolderOutlined, 
    CalendarOutlined, 
    LayoutOutlined,
    WechatOutlined,
    ReadOutlined,
    FormOutlined,
    DownloadOutlined} from '@ant-design/icons';
class Leftsider extends Component {
        
    render() {
        return (
          
            <div >
             
                <div className="leftsider col-2" >
                    
                    
                        <div className="menu-div">
                            <Link className="menu" to="/" >
                                <div><LayoutOutlined style={{marginRight:20,float:"left"}}/><div style={{marginTop:-4,float:"left"}}>Dashboard</div></div>
                            </Link>
                            <Link className="menu" to="/classes">
                            
                            <div><FolderOutlined style={{marginRight:20,float:"left"}}/><div style={{marginTop:-4,float:"left"}}>Classes</div></div>
                            
                            </Link>
                            <Link className="menu" to="/resources">
                        
                            
                            <div><ReadOutlined style={{marginRight:20,float:"left"}}/><div style={{marginTop:-4,float:"left"}}>Resources</div></div>

                            
                            </Link>
                            <Link className="menu" to="/learningplan">
                            
                          
                            <div><CalendarOutlined style={{marginRight:20,float:"left"}}/><div style={{marginTop:-4,float:"left"}}>Learning Plan</div></div>
                            
                            
                            </Link>
                            <Link className="menu" to="/chat">
                            
                            
                            <div><WechatOutlined style={{marginRight:20,float:"left"}}/><div style={{marginTop:-4,float:"left"}}>Chat</div></div>

                            
                            </Link>
                            <Link className="menu" to="/settings">
                            
                            
                            <div><FormOutlined style={{marginRight:20,float:"left"}}/><div style={{marginTop:-4,float:"left"}}>Settings</div></div>

                            </Link>
                        </div>
                        <div className="upgrade">
                            <div>
                            <div style={{fontSize:30}}><DownloadOutlined /></div>
                            Upgrade to <b>Pro</b> for<br/> more resources.
                            </div>
                            
                            <div style={{marginTop:20}}><Button variant="primary">Upgrade</Button></div>

                        </div>
                    
                </div>
               
            </div>
           
        )
    }
}

export default Leftsider

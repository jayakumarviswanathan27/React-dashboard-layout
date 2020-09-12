
import React, { Component } from 'react'
import { Progress } from 'antd';
import { Avatar } from 'antd';
import { Button } from 'antd';
import "./RightSider.css"
import { MailOutlined,
    InfoCircleOutlined,
    BellFilled,
    LogoutOutlined  } from '@ant-design/icons';

class Rightsider extends Component {
   
    
    render() {
        return (
            <div className="rightsider col-3" >
                <div className="right-side-content">

                    <Button type="text" style={{marginTop:10}}>
                    Logout<LogoutOutlined style={{marginLeft:"10vh",marginBottom:7}}/>
                    </Button>   
                    <div className="avatar-right-sidebar"><Avatar size={120}  src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"/></div>                 
                    <div className="Student-right-sidebar">
                        <b>Cham Fernas</b><br/>
                        Student
                    </div>
                    <div>
                       <button className="button11" style={{color:"#606062",backgroundColor:"#F5F5F5"}}>B2</button><div className="butn-content"><b>English <div className="progress-bar-horizontal">
                                        <Progress percent={65} size="small" strokeColor="#6C7293" showInfo={false}/>
                                    </div></b></div>High Intermediate
                        </div>
                        
                        <div style={{marginTop:20}}>
                       <button className="button11" style={{color:"#606062",backgroundColor:"#F5F5F5"}}>C2</button><div className="butn-content"><b>English <div className="progress-bar-horizontal">
                                        <Progress percent={80} size="small" strokeColor="#6C7293" showInfo={false}/>
                                    </div></b></div>High Intermediate
                        </div>


                    <div>
                        <div className="reminder"><b>Reminders</b><BellFilled style={{float:"right",marginRight:87,fontSize:22}} /></div>
                        <div >
                       <button className="button11" style={{backgroundColor:"#FBEDED"}}><InfoCircleOutlined style={{fontSize:23,marginBottom:2,color:"#DBBDC2"}} /></button><div className="butn-content"><b>Eng-Vocabulary test </b></div>High Intermediate
                        </div>
                        <div style={{marginTop:20}}>
                       <button className="button11"><MailOutlined style={{fontSize:23,marginBottom:2,color:"#A5ABB8"}}/></button><div className="butn-content"><b>Eg-Send grammar homework </b></div>High Intermediate
                        </div>
                        <div style={{marginTop:20}}>
                       <button className="button11"><MailOutlined style={{fontSize:23,marginBottom:2,color:"#A5ABB8"}}/></button><div className="butn-content"><b>Spanish-Send essey </b></div>High Intermediate
                        </div>
                       
                    </div>
                
                </div>  
            </div>
        )
    }
}

export default Rightsider

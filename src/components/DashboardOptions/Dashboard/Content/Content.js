 import React, { Component } from 'react'
import { Row, Col, } from 'antd';
import { Progress } from 'antd';
import { Avatar } from 'antd';


import "./Content.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown,faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'



class content extends Component {
    render() {
        return (
            <div>
                <div className="content col-7">
                  
                    <Row className="topheader" xs={24} sm={1} md={2} lg={4}><h5><b>Dashboard</b></h5></Row>
                    
                   
                    <Row className="header">
                        <Col xs={24} sm={24} md={16}  >
                            <Row >
                            <p><h4>Welcome back Cham!</h4>
                            <b>you have learned 80% of your goal this weak!<br/>keep it up and improve your result!</b></p>
                            </Row>
                            
                            
                       
                        
                        </Col>

                        <Col xs={24} sm={24} md={8}  >
                        <Avatar size={140} className="avatar-header" src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"/>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={9}>
                            <Row>
                            <div className="center1" >
                                <div className="center1-head">
                                    <b>Latest result</b>
                                    <div className="progress-bar-horizontal"><b>More</b><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight}/></div>
                                </div>
                                <div className="unit-content" ><b>Unit 5-</b>Technology
                                    <div className="progress-bar-horizontal" style={{marginLeft:"4.5vh"}}>
                                        <Progress percent={25} size="small" strokeColor="#B48588" />
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 12-</b>Ecology
                                    <div className="progress-bar-horizontal" style={{marginLeft:"6.5vh"}}>
                                        <Progress percent={44} size="small" strokeColor="#6C7690"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 9-</b>Real estate
                                    <div className="progress-bar-horizontal" style={{marginLeft:"5vh"}}>
                                        <Progress percent={40} size="small" strokeColor="#9CACBF"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 8-</b>Education
                                    <div className="progress-bar-horizontal" style={{marginLeft:"6vh"}}>
                                        <Progress percent={15} size="small" strokeColor="#94787F"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 16-</b>Job market
                                    <div className="progress-bar-horizontal" style={{marginLeft:"4vh"}}>
                                        <Progress percent={76} size="small" strokeColor="#677091"/>
                                        </div>
                                        
                                    </div>
                           
                            </div> 
                            </Row> 
                        </Col>
            
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={15}>
                            <div className="center2">
                            <div className="center1-head">
                                    <b>Time spent on learning</b>
                                    <div className="progress-bar-horizontal"><b>Last week<FontAwesomeIcon className="icon" icon={faAngleDown}/></b></div> </div>
                                    <Row >
                                       
                                        <Col span={3}className="week">Mon</Col>
                                        <Col span={3}>Tue</Col>
                                        <Col span={3}>Wed</Col>
                                        <Col span={3}>Thu</Col>
                                        <Col span={3}>Fri</Col>
                                        <Col span={3}>Sat</Col>
                                        <Col span={3}>Sun</Col>
                                    </Row>
                                        <Row>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    
                                                    <div className="bar"><div className="grammer" style={{width:"50%"}}></div><div className="vocabulary"  style={{width:"20%"}}></div><div className="writing"  style={{width:"30%"}}></div></div>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    <div className="bar"><div className="listening" style={{width:"90%"}} ></div><div className="vocabulary" style={{width:"10%"}}></div></div>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    <div className="bar"><div className="listening"  style={{width:"40%"}} ></div><div className="grammer"  style={{width:"45%"}}></div><div className="writing"  style={{width:"15%"}}></div></div>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    <div className="bar"><div className="listening" style={{width:"60%"}} ></div><div className="vocabulary" style={{width:"40%"}}></div></div>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    <div className="bar"><div className="writing" style={{width:"80%"}}></div><div className="vocabulary"  style={{width:"20%"}}></div></div>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    <div className="bar"><div className="listening"  style={{width:"45%"}}></div><div className="grammer"  style={{width:"55%"}}></div></div>
                                                </div>
                                            </Col>
                                            <Col span={3}>
                                                <div className="vertical" >
                                                    <div className="bar"><div className="listening"  style={{width:"40%"}}></div><div className="grammer"  style={{width:"45%"}}></div><div className="vocabulary"  style={{width:"15%"}}></div></div>
                                                </div>
                                            </Col>
                                        
                                        </Row>
                                        <Row style={{marginTop:"12vh"}}>
                                            <Col id="dots" span={5}>
                                                        <span className="dot" style={{backgroundColor:"#C396A3"}}></span><div className="dot-content" style={{marginRight:"1vh"}}>Vocabulary</div></Col>
                                            <Col span={5}><span className="dot" style={{backgroundColor:"#4E4A5F"}}></span><div className="dot-content" style={{marginRight:"2vh"}} >Grammer</div></Col>
                                            <Col span={5}><span className="dot" style={{backgroundColor:"#6D7796"}}></span><div className="dot-content" style={{marginRight:"2vh"}}>Listening</div></Col>
                                            <Col span={5}><span className="dot" style={{backgroundColor:"#D0CFD6"}}></span><div className="dot-content" style={{marginRight:"4vh"}}>Writing</div></Col>
                                            
                                            </Row>
                                    
                                            
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Row  xs={24} sm={24} md={24} >
                        <div className="your-course"><b>Your course</b></div>
                        <div className="above-header"><b>more</b><FontAwesomeIcon className="icon" icon={faArrowAltCircleRight}/></div>
                        
                    </Row>
                    </Row>

                    <Row gutter={[24, 16]}>
                        
                        <Col className="gutter-row " xs={24} sm={24} md={24} lg={8}>
                            <button className="footer1">
                                <Row>
                            <button className="button1">C1</button>
                            <Row className="button-content1">Bussiness English<br/>Grammer<FontAwesomeIcon style={{marginTop:"3.3vh"}} className="icon" icon={faArrowAltCircleRight}/></Row>
                            </Row>
                            </button>
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8}>
                        <button className="footer2">
                                <Row>
                            <button className="button2">C1</button>
                            <Row className="button-content1">Common English<br/>Prasal Verbs<FontAwesomeIcon style={{marginTop:"3.3vh"}} className="icon" icon={faArrowAltCircleRight}/></Row>
                            </Row>
                            </button>
                        
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8}>
                        <button className="footer3">
                                <Row>
                            <button className="button3">C1</button>
                            <Row className="button-content1">Bussiness Spanish<br/>Vocabulary<FontAwesomeIcon style={{marginTop:"3.3vh"}} className="icon" icon={faArrowAltCircleRight}/></Row>
                            </Row>
                            </button>
                           
                        </Col>
                       
                    </Row>
                </div>
            </div>
        )
    }
}

export default content

 import React, { Component } from 'react'
import { Row, Col,} from 'antd';
import { Progress } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export class content extends Component {
    render() {
        return (
            <div>
                <div className="content col-7">
                   
                    <div className="topheader"><h5><b>Dashboard</b></h5></div>
                   
                    <Row className="header">
                        <Col span={16} >
                        
                            <p><h4>Welcome back Cham!</h4>
                            <b>you have learned 80% of your goal this weak!<br/>keep it up and improve your result!</b></p>
                            
                       
                        
                        </Col>
                        <Col span={8}>
                        <Avatar size={140} className="avatar-header" src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"/>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col className="gutter-row" span={9}>
                            <div className="center1" >
                                <div className="center1-head">
                                    <b>Latest result</b>
                                    <div className="progress-bar-horizontal">More</div>
                                </div>
                                <div className="unit-content"><b>Unit 5-</b>Technology
                                    <div className="progress-bar-horizontal">
                                        <Progress percent={30} size="small"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 5-</b>Technology
                                    <div className="progress-bar-horizontal">
                                        <Progress percent={30} size="small"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 5-</b>Technology
                                    <div className="progress-bar-horizontal">
                                        <Progress percent={30} size="small"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 5-</b>Technology
                                    <div className="progress-bar-horizontal">
                                        <Progress percent={30} size="small"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="unit-content"><b>Unit 5-</b>Technology
                                    <div className="progress-bar-horizontal">
                                        <Progress percent={30} size="small"/>
                                        </div>
                                        
                                    </div>
                           
                            </div>  
                        </Col>
            
                        <Col className="gutter-row" span={15}>
                            <div className="center2">
                            <div className="center1-head">
                                    <b>Latest result</b>
                                    <div className="progress-bar-horizontal">More</div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col className="gutter-row " span={8}>
                            <div className="footer1">
                                
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="footer2"></div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="footer3"></div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default content

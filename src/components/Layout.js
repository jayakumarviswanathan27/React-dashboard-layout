import React from 'react'
import 'antd/dist/antd.css';
import './Layout.css'

import { Row, Col,} from 'antd';



function layout() {
    return (
    <div className="container1">
        <div className="leftsider col-2" >
            </div>
            <div className="content col-7">
      <Row className="header">
                <Col span={24} ></Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col className="gutter-row" span={9}>
                    <div className="center1"></div>
                </Col>
      
                <Col className="gutter-row" span={15}>
                    <div className="center2"></div>
                </Col>
            </Row>
            <Row gutter={[24, 16]}>
                <Col className="gutter-row " span={8}>
                    <div className="footer1"></div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className="footer2"></div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className="footer3"></div>
                </Col>
            </Row>
            </div>
      
          <div className="rightsider col-3" >
            
          </div>
    
  
            
            
        </div>
       
    )
}

export default layout


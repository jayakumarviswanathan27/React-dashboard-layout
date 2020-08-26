import React from 'react'
import 'antd/dist/antd.css';
import './Layout.css'

import { Row, Col,} from 'antd';
import Rightsider from './Rightsider';
import Content from './Content'
import Leftsider from './Leftsider';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Classes from './Dashboard/Classes';
import Reasources from './Dashboard/Reasources';
import LearningPlan from './Dashboard/LearningPlan';
import Chat from './Dashboard/Chat';
import Settings from './Dashboard/Settings';
 

function layout() {
    return (
    <div className="container1">
        <Router>
            <Leftsider/>
            <switch>
                <Route path="/" exact component={Content}  />
                <Route path="/classes" component={Classes} />
                <Route path="/resources" component={Reasources} />
                <Route path="/learningplan" component={LearningPlan} />
                <Route path="/chat" component={Chat} />
                <Route path="/settings" component={Settings} />
            </switch>
            <Rightsider/>
        </Router>
    </div>
       
    )
}

export default layout


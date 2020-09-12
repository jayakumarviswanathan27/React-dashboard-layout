import React from 'react'
import 'antd/dist/antd.css';
import './Layout.css'


import Rightsider from './DashboardOptions/Dashboard/RightSider/Rightsider';
import Content from './DashboardOptions/Dashboard/Content/Content'
import Leftsider from './DashboardOptions/Dashboard/LeftSider/Leftsider';
import {
    BrowserRouter as Router,
   
    Route,
   
  } from "react-router-dom";
import Classes from './DashboardOptions/Classes/Classes';
import Reasources from './DashboardOptions/Reasources/Reasources';
import LearningPlan from './DashboardOptions/LearningPlan/LearningPlan';
import Chat from './DashboardOptions/Chat/Chat';
import Settings from './DashboardOptions/Settings/Settings';
 

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


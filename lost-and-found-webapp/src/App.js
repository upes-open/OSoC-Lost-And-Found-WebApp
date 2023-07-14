import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import UserReg from "./UserReg-Page/UserReg-Page";
import UserLogin from "./user-login-page/UserLogin";

const App = () => (
    <div>
        {/* <Navbar /> */}
        {/* <FeedbackForm /> */}
        {/* <HelpUs/> */}
        {/* <UserReg /> */}
        {/* <UserLogin /> */}
        <Route>
            <Switch>
                <Route path="/" exact component={UserReg} />
                <Route path="/login" component={UserLogin} />
                <Route path="/helpus" component={HelpUs} />
            </Switch>
        </Route>
    
    </div>
);



export default App;

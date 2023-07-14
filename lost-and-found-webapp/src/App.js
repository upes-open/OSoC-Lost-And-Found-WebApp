import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import UserReg from "./UserReg-Page/UserReg-Page";


const App = () => (
    <div>
        {/* <Navbar /> */}
        {/* <FeedbackForm /> */}
        {/* <HelpUs/> */}
        <UserReg />
    </div>
);



export default App;

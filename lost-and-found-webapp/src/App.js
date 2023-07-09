import React from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Nav";
import HelpUsFind from './HelpUsFind';


const App = () => (
    <Router>
    <div>
        <Nav />
        {/* <FeedbackForm /> */}
        <Route path="/help-us-find" component={HelpUsFind} />
    </div>
    </Router>
);



export default App;

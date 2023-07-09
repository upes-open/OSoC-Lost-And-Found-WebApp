import React from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Nav from "./Nav";
import HelpUs from "./help-us-find-page/HelpUs"

const App = () => (
    <div>
        <Nav />
        <FeedbackForm />
        {/* <HelpUs/> */}
    </div>
);



export default App;

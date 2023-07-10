import React from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"

const App = () => (
    <div>
        <Navbar />
        <FeedbackForm />
        {/* <HelpUs/> */}
    </div>
);



export default App;

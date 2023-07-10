import React from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import GoToTop from "./go-to-top/GoToTop";

const App = () => (
    <div>
        <Navbar />
        {/* <FeedbackForm /> */}
        <HelpUs/>
        <GoToTop/>
    </div>

);



export default App;

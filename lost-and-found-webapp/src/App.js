import React from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import Home from "./home-page/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
    <div>

        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/helpusfind" element={<HelpUs />} />
            </Routes>
        </Router>
    </div>

);



export default App;

import React from "react";

import "./App.css";
// import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import AboutUs from "./About/AboutUs";
import Home from "./home-page/Home"
import GoToTop from "./go-to-top/GoToTop"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LostUpload from './lost-details-upload-page/LostUpload';
import FoundUpload from './found-item-details-page/FoundUpload';

import Login from "./login-page/Login";


const App = () => (
    <div>

        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<AboutUs />} />
                <Route exact path="/helpusfind" element={<HelpUs />} />
                <Route exact path="/lost" element={<LostUpload />} />
                <Route exact path="/found" element={<FoundUpload />} />
            </Routes>
            <GoToTop/>
        </Router>

    </div>

);



export default App;

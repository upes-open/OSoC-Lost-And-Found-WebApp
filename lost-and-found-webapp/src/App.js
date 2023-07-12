import React from "react";
import "./App.css";
// import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import Home from "./home-page/Home"
import GoToTop from "./go-to-top/GoToTop"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LostUpload from './lost-details-upload-page/LostUpload';
import FoundUpload from './found-item-details-page/FoundUpload';

const App = () => (
    <div>

        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/helpusfind" element={<HelpUs />} />
                <Route exact path="/lost" element={<LostUpload />} />
                <Route exact path="/found" element={<FoundUpload />} />
            </Routes>
            <GoToTop/>
        </Router>

    </div>

);



export default App;

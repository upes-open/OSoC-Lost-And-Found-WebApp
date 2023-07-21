import React, { useState } from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
import AboutUs from "./About/AboutUs";
import Home from "./home-page/Home"
import GoToTop from "./go-to-top/GoToTop"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LostUpload from './lost-details-upload-page/LostUpload';
import FoundUpload from './found-item-details-page/FoundUpload';
import ItemDetails from "./item-gallery-details/ItemDetails";
import ItemGallery from "./items-gallery/ItemGallery";
import CategorySelection from "./items-gallery/CategorySelection";
import Login from "./login-page/Login"
import Faq from "./faq/Faq";
import Footer from "../src/Footer/Footer"

const App = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = (theme) => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme);
    };

    return (
        <div>
                <Router>
                    <Navbar toggleTheme={toggleTheme} theme={theme}/>
                    <Routes>
                        <Route exact path="/" element={<Login theme={theme}/>} />
                        <Route exact path="/home" element={<Home theme={theme}/>} />
                        <Route exact path="/about" element={<AboutUs theme={theme}/>} />
                        <Route exact path="/helpusfind" element={<HelpUs theme={theme}/>} />
                        <Route exact path="/lost" element={<LostUpload theme={theme}/>} />
                        <Route exact path="/found" element={<FoundUpload theme={theme}/>} />
                        <Route exact path="/feedback" element={<FeedbackForm theme={theme}/>} />
                        <Route exact path="/items" element={<CategorySelection theme={theme}/>} />
                        <Route exact path="/items/:category" element={<ItemGallery theme={theme}/>} />
                        <Route exact path="/details/:id" element={<ItemDetails theme={theme}/>} />
                        <Route exact path="/faq" element={<Faq theme={theme}/>} />
                    </Routes>
                    <GoToTop />
                    <Footer/>
                </Router>
        </div>
    )

};

export default App;
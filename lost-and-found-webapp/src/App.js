import React from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs"
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

const App = () => (
    <div>

        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/helpusfind" element={<HelpUs />} />
                <Route exact path="/lost" element={<LostUpload />} />
                <Route exact path="/found" element={<FoundUpload />} />
                <Route exact path="/feedback" element={<FeedbackForm />} />
                <Route exact path="/items" element={<CategorySelection />} />
                <Route exact path="/items/:category" element={<ItemGallery />} />
                <Route exact path="/details/:id" element={<ItemDetails />} />
                <Route exact path="/faq" element={<Faq />} />
            </Routes>
            <GoToTop/>
        </Router>

    </div>

);



export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import FeedbackForm from "./feedback/FeedbackForm";
import Navbar from "./Navbar/Navbar";
import HelpUs from "./help-us-find-page/HelpUs";
import AboutUs from "./About/AboutUs";
import Home from "./home-page/Home";
import GoToTop from "./go-to-top/GoToTop";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LostUpload from './lost-details-upload-page/LostUpload';
import FoundUpload from './found-item-details-page/FoundUpload';
import ItemDetails from "./item-gallery-details/ItemDetails";
import ItemGallery from "./items-gallery/ItemGallery";
import CategorySelection from "./items-gallery/CategorySelection";
import Login from "./login-page/Login";
import Faq from "./faq/Faq";
import Footer from "../src/Footer/Footer";
import ProtectedRoute from './ProtectedRoute'; // Import the refactored ProtectedRoute component

import { MsalProvider, useMsal } from "@azure/msal-react";
import { PublicClientApplication, LogLevel } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "0ab57f1a-6d44-4dfd-b784-55300e2d114b",
    authority: "https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b",
    redirectUri: "http://localhost:3000/", // Update this with your redirect URI
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  return (
    <MsalProvider instance={new PublicClientApplication(msalConfig)}>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login theme={theme} />} />
          {/* Non-protected routes */}
          <Route path="/about" element={<AboutUs theme={theme} />} />
          <Route path="/faq" element={<Faq theme={theme} />} />

          {/* Protected routes */}
          <Route path="/home" element={<ProtectedRoute><Home theme={theme} /></ProtectedRoute>} />
          <Route path="/lost" element={<ProtectedRoute><LostUpload theme={theme} /></ProtectedRoute>} />
          <Route path="/found" element={<ProtectedRoute><FoundUpload theme={theme} /></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute><FeedbackForm theme={theme} /></ProtectedRoute>} />
          <Route path="/items" element={<ProtectedRoute><CategorySelection theme={theme} /></ProtectedRoute>} />
          <Route path="/items/:category" element={<ProtectedRoute><ItemGallery theme={theme} /></ProtectedRoute>} />
          <Route path="/details/:id" element={<ProtectedRoute><ItemDetails theme={theme} /></ProtectedRoute>} />
          <Route path="/helpusfind" element={<ProtectedRoute><HelpUs theme={theme} /></ProtectedRoute> }/>

          {/* Sign-out route */}
          <Route path="/signout" element={<SignOut />} />
        </Routes>
        <GoToTop />
        <Footer />
      </Router>
    </MsalProvider>
  );
};

// ProtectedRoute component remains the same as in the previous example

// Sign-out component to handle sign-out process
const SignOut = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.logout();
  }, [instance]);

  return (
    <div>
      <h1>Signing Out...</h1>
      <p>Please wait while we sign you out.</p>
      {/* Optionally, you can add a link to redirect users back to the homepage */}
      <Link to="/home">Go to Homepage</Link>
    </div>
  );
};

export default App;

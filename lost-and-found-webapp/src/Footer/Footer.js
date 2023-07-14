import React, { useState } from 'react';
import "./Footer.css";
import image from "../images/insta-logo.png";
import image1 from "../images/twitter-logo.png";
import image2 from "../images/facebook-logo.png";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="footer">
      <div className="content">
        <NavLink to="/about" activeClassName="active-link" className="nav-link">
          <p>About Us</p>
        </NavLink>
        <p>Services</p>
        <NavLink to="/feedback" activeClassName="active-link" className="nav-link">
          <p>Feedback</p>
        </NavLink>
        <p
          className={`menu-item ${isDropdownOpen ? 'active' : ''}`}
          onClick={toggleDropdown}
        >
          Social
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            {/* Dropdown content */}
            <ul className="dropdown-menu">
              <li>
                <a className="link" href='https://www.instagram.com/upes_dehradun/'>
                  <img src={image} className="instapic"  alt="Instagram-logo" />
                  <span className="text">Instagram</span>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/UPESDehradun'>
                  <img src={image1} className="instapic"  alt="Twitter-logo" />
                  <span className="text">Twitter</span>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/UPESddnuk/'>
                  <img src={image2} className="instapic"  alt="Facebook-logo"/>
                  <span className="text">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>

      <div className="main-div">
        <div className="contentname1">
          <NavLink to="/" className="navlinkhome link-no-underline"><p>Home</p></NavLink>
          <NavLink to="/feedback" className="navlinkhome link-no-underline"><p>Feedbacks</p></NavLink>
        </div>

        <div className="contentname2">
          <p>Report Lost Item</p>
          <p>Report Found Item</p>
          <p>See Items Gallery</p>
          <NavLink to="/helpusfind" className="navlinkhome link-no-underline"><p>Help Us Find</p></NavLink>
        </div>

        <div className="contentname3">
          <p>Email</p>
          <p>Contact Number</p>
          <p>Visit Us</p>
        </div>

        <div className="contentname4">
          <p>
            <img src={image} className="instapic" alt="Instagram-logo" />
            <a href='https://www.instagram.com/upes_dehradun/' className="link-no-underline"  >
              <span className="text">Instagram</span>
            </a>
          </p>
          <p>
            <img src={image1} className="instapic"  alt="Twitter-logo" />
            <a href='https://twitter.com/UPESDehradun' className="link-no-underline">
              <span className="text">Twitter</span>
            </a>
          </p>
          <p>
            <img src={image2} className="instapic"  alt="Facebook-logo" />
            <a href='https://www.facebook.com/UPESddnuk/' className="link-no-underline">
              <span className="text">Facebook</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

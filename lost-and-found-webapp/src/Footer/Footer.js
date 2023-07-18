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
      {/* <NavLink to="/about" activeClassName="active-link"><p>About Us</p></NavLink> */}
      <NavLink to="/about" activeClassName="active-link" className="nav-link">
  <p>About Us </p>
</NavLink>

        <p>Services</p>
        <NavLink to="/feedback" activeClassName="active-link" className="nav-link"><p>Feedback </p></NavLink>
        <p
          className="menu-item"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          Social
          {isDropdownOpen && (
            <div className="dropdown">
              {/* Dropdown content */}
              <ul className="dropdownmenu">
                <li>
                  <a href='https://www.instagram.com/upes_dehradun/'><img src={image} className="instapic" alt='insta-pic'/><span className="text">Instagram</span></a>
                </li>
                <li>
                  <a href='https://twitter.com/UPESDehradun' ><img src={image1} className="instapic" alt='twitter-pic' /><span className="text">Twitter</span></a>
                </li>
                <li>
                  <a href='https://www.facebook.com/UPESddnuk/' > <img src={image2} className="instapic" alt='facebook-pic' /><span className="text">Facebook</span></a>
                </li>
              </ul>
            </div>
          )}
        </p>
      </div>

      <div className="main-div">
        <div className="contentname1">
          <NavLink to="/home" className = "navlinkhome removeUnderline"><p>Home </p></NavLink>
          <NavLink to="/feedback" className = "navlinkhome removeUnderline"><p>Feedbacks</p></NavLink>
          
        </div>

        <div className="contentname2">
        <NavLink to="/lost" className = "navlinkhome removeUnderline"><p>Report Lost Item</p></NavLink>
        <NavLink to="/found" className = "navlinkhome removeUnderline"><p>Report Found Item</p></NavLink>
        <NavLink to="/items" className = "navlinkhome removeUnderline"><p>See Items Gallery</p></NavLink>
        <NavLink to="/helpusfind" className = "navlinkhome removeUnderline"><p>Help Us Find</p></NavLink>
        </div>

        <div className="contentname3">
          <p>Email</p>
          <p>Contact Number</p>
          <p>Visit Us</p>
        </div>

        <div className="contentname4">
          <p>
            <img src={image} className="instapic" alt='insta-pic'  /><a className="removeUnderline"  href='https://www.instagram.com/upes_dehradun/'><span className="text ">Instagram</span></a>
          </p>
          <p>
            <img src={image1} className="instapic" alt='twitter-pic' /><a className="removeUnderline" href='https://twitter.com/UPESDehradun'><span className="text">Twitter</span></a>
          </p>
          <p>
          <img src={image2} className="instapic" alt='facebook-pic' /><a className="removeUnderline" href='https://www.facebook.com/UPESddnuk/' ><span className="text">Facebook</span></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

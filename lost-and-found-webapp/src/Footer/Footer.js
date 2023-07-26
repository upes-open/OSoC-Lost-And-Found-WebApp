import React from 'react';
import "./Footer.css";
import fb from "../images/insta-logo.png";
import twitter from "../images/twitter-logo.png";
import insta from "../images/facebook-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer__section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>About Us</h4>
            <a href="/home">
              <p>Home</p>
            </a>
            <a href="/feedback">
              <p>Feedback</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Services</h4>
            <a href="/lost">
              <p>Report Lost Item</p>
            </a>
            <a href="/found">
              <p>Report Found Item</p>
            </a>
            <a href="/items">
              <p>See Items Gallery</p>
            </a>
            <a href="/helpusfind">
              <p>Help Us Find</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/about">
              <p>UPES Open Community</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Feedback</h4>
            <a href="/resources">
              <p>Email</p>
            </a>
            <a href="/resources">
              <p>Contact Number</p>
            </a>
            <a href="/resources">
              <p>Visit Us</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Social</h4>
            <div className='socialmedia'>
            <a href="https://www.instagram.com/upes_dehradun/"><p><img src={fb} alt="instaimage"/></p></a>
            <a href="https://twitter.com/UPESDehradun/"><p><img src={twitter} alt="twitterimage"/></p></a>
            <a href="https://www.facebook.com/UPESddnuk/"><p><img src={insta} alt="fbimage"/></p></a>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/terms"><div><p>Privacy</p></div></a>
            <a href="/terms"><div><p>Security</p></div></a>
            <a href="/terms"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

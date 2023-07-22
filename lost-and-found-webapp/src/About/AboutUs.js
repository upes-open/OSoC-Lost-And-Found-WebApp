import React from "react";
import "./AboutUs.css";
import images from "../images/about-bg.png";

const AboutUs = (props) => {
  return (
    <div className={`about-us ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
      <section className={`about-us ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{fontFamily:"'Poppins', sans-serif"}}>
        <div className="about">
        <img src={images} alt="About Us" className="pic" />
          <div className="text">
            <h2 className="heading" style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>About Us</h2>
             <h5 style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>At our <span>Lost &amp;Found</span></h5>
            <p className="paratext" style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>web app, we are dedicated to reuniting people with their lost belongings and restoring what's been found. We understand the frustration and anxiety that comes with losing something valuable, whether it's a sentimental item or a daily essential.
            </p>
            <div className="data">
            <a href="/items" className="hire">Try Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./AboutUs.css";
import images from "../images/about-bg.png"
const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-us">
        <div className="about">
        <img src={images} alt="About Us" className="pic" />
          <div className="text">
            <h2 className="heading">About Us</h2>
             <h5>At our <span>Lost &amp;Found</span></h5>
            <p className="paratext">web app, we are dedicated to reuniting people with their lost belongings and restoring what's been found. We understand the frustration and anxiety that comes with losing something valuable, whether it's a sentimental item or a daily essential.
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

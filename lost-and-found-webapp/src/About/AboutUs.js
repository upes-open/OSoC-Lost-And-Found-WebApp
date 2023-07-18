import React from "react";
import "./AboutUs.css";
import images from "../images/about-bg.png"
const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-us">
        <div className="about">
        <img src={images} alt="image" className="pic" />
          <div className="text">
            <h2 className="heading">About Us</h2>
             <h5>At our <span>Lost &amp;Found</span></h5>
            <p className="paratext">web app, we are dedicated to reuniting people with their lost belongings and restoring what's been found. We understand the frustration and anxiety that comes with losing something valuable, whether it's a sentimental item or a daily essential.
            {/* <hr></hr>
            <p>Our mission is to provide a reliable platform where users can report lost items, search for their missing possessions, and connect with the individuals who have found them. We believe in fostering a community that values honesty and compassion, enabling the return of lost treasures to their rightful owners.
            </p>
            <p>
            With our intuitive interface and powerful search features, we aim to streamline the process of recovering lost items. Our advanced matching algorithms ensure that potential matches are accurately identified, increasing the chances of successful reunions.
            </p>
            <hr></hr>
            <p>
            Our team is comprised of dedicated individuals who are passionate about facilitating the return of lost belongings. We are committed to providing exceptional support and assistance to both those who have lost something and those who have found a lost item. We believe in the power of technology to bridge the gap and bring people together, creating a positive impact on the lives of individuals and communities.
            </p>
            <hr></hr>
            <p>
            Join us in our mission to reunite lost possessions with their owners. Together, we can turn the misfortune of loss into a glimmer of hope and restore what has been lost.
            </p> */}


            </p>
            <div className="data">
              <a href="#" className="hire">Try Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

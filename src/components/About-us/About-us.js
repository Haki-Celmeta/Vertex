import React from "react";
import interior from "../../assets/images/about-us-interior-design.jpg";
import { Link } from "react-router-dom";
import './_about-us.scss';

const About = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="info-img">
        <div className="about-us-information">
          <p>
            At Vertex, our team of industry experts brings a wealth of experience to every project.
            Whether it's architectural design, meticulous planning, or on-site execution, we are committed to
            exceeding expectations...
          </p>
          <Link to="about">READ MORE</Link>
        </div>
        <img src={interior} alt="about-us-interior-design" />
      </div>
    </div>
  )
}

export default About;
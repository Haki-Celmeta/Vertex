import React from "react";
import logo from "../../assets/images/logo-no-background.png"
import { Link } from "react-router-dom";
import facebook from "../../assets/images/social-media/facebook-svgrepo-com.svg";
import instagram from "../../assets/images/social-media/instagram-svgrepo-com.svg";
import xMedia from "../../assets/images/social-media/x-social-media-black-icon.svg";
import pinterest from "../../assets/images/social-media/pinterest-svgrepo-com.svg";
import linkedin from "../../assets/images/social-media/linkedin-161-svgrepo-com.svg";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="web-foot">
      <div className="first-part">
        <img src={logo} alt="logo" />
        <div>
          <h4>Community Engagement</h4>
          <h4>Early Days</h4>
          <h4>Architecture</h4>
        </div>
        <div>
          <h4>Color palette</h4>
          <h4>Combination</h4>
        </div>
        <div>
          <h4>Showcase</h4>
          <h4>Support</h4>
          <h4>Submit a ticket</h4>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="services">Services</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
      <div className="second-part">
        <div className="social-media-container">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={xMedia} alt="x-social-media" />
          <img src={pinterest} alt="pinterest" />
          <img src={linkedin} alt="linkedin" />
        </div>
        <h4>©Copyright. All rights reserved.</h4>
      </div>
    </footer>
  )
}

export default Footer;
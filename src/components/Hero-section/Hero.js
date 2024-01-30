import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/line-right-arrow.svg";
import './_hero.scss';

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>Vertex Construction</h1>
      <h2>
        Vertex Construction delivers cutting-edge building solutions, blending innovation with uncompromising quality. From concept to completion, we excel in creating spaces that inspire, endure, and exceed expectations.
      </h2>
      <Link to="contact">Contact Now <img src={arrow} alt="line-arrow-right" /></Link>
    </div>
  )
}

export default Hero;
import React from "react";
import { Link } from "react-router-dom";

const Work = ({ title, children, image }) => {
  return (
    <div className="work-display-container interior">
      <div className="work-information-container">
        <h2>
          {title}
        </h2>
        <p>
          {children}
        </p>
        <Link to="services">READ MORE</Link>
      </div>
      <img src={image} alt={title} />
    </div>
  )
}

export default Work;
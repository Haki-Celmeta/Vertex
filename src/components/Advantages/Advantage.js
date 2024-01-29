import React from "react";

const Advantage = ({ title, children, image }) => {
  return (
    <div className="advantage">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        {children}
      </p>
    </div>
  )
}

export default Advantage;
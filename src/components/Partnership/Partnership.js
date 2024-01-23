import React from "react";

const Partnership = ({ image, firmName }) => {
  return (
    <div className="partnership">
      <img src={image} alt={firmName} />
      <h3>{firmName}</h3>
    </div>
  )
}

export default Partnership;
import React from "react";
import interior from "../../assets/images/interior-design-finishing.jpg";
import './_work-display.scss';

const WorkDisplay = () => {
  return (
    <div className="work-display-container">
      <div className="work-information-container">
        <h2>
          Interior Finishing
        </h2>
        <p>
          Our Concrete Work services at Vertex Construction epitomize strength, durability, and precision.
          From laying the foundation for robust structures to crafting intricate concrete details,
          we bring expertise to every stage of the construction process.
          Our skilled teams excel in pouring foundations, constructing walls, floors, and other concrete structures,
          ensuring the structural integrity of your project.
        </p>
      </div>
      <img src={interior} alt="Interior finishing" />
    </div>
  )
}

export default WorkDisplay;
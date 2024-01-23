import React from "react";
import interior from "../../assets/images/interior-design-finishing.jpg";
import concrete from "../../assets/images/concrete-work.jpg";
import architecture from "../../assets/images/architecture-design.jpg";
import Work from "./Work";
import './_work-display.scss';

const WorkDisplay = () => {
  return (
    <div className="all-work-container">
      <Work title="Interior Finishing" image={interior}>
        Elevate your spaces with Vertex Construction's Interior Finishing services,
        where craftsmanship meets creativity. Our team specializes in bringing your design vision to life,
        meticulously installing flooring, walls, ceilings, and finishes that define the character of your interiors.
      </Work>

      <div className="work-display-container concrete">
        <img src={concrete} alt="Interior finishing" />
        <div className="work-information-container">
          <h2>
            Concrete Work
          </h2>
          <p>
            Our Concrete Work services at Vertex Construction epitomize strength, durability, and precision.
            From laying the foundation for robust structures to crafting intricate concrete details,
            we bring expertise to every stage of the construction process.
            Our skilled teams excel in pouring foundations, constructing walls, floors, and other concrete structures,
            ensuring the structural integrity of your project.
          </p>
        </div>
      </div>

      <Work title="Architectural Design" image={architecture}>
        Architectural Design at Vertex Construction is the art of turning imagination into reality.
        Our seasoned architects blend creativity with functionality, shaping spaces that inspire and endure.
        From conceptualization to meticulous planning, we bring innovative designs to life,
        ensuring each project is a harmonious fusion of aesthetics and structural integrity.
      </Work>
    </div>
  )
}

export default WorkDisplay;
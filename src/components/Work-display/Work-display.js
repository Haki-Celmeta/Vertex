import React from "react";
import interior from "../../assets/images/interior-design-finishing.jpg";
import concrete from "../../assets/images/concrete-work.jpg";
import architecture from "../../assets/images/architecture-design.jpg";
import Work from "./Work";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './_work-display.scss';

const WorkDisplay = () => {
  const workVariant = {
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' }, y: 0 },
    hidden: { opacity: 0, y: '20px' },
  }

  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={workVariant}
      initial="hidden"
      animate={control}
      className="all-work-container"
    >
      <h2>Some Of Our Services</h2>
      <div className="services-container">
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
            <Link to="services">READ MORE</Link>
          </div>
        </div>

        <Work title="Architectural Design" image={architecture}>
          Architectural Design at Vertex Construction is the art of turning imagination into reality.
          Our seasoned architects blend creativity with functionality, shaping spaces that inspire and endure.
          From conceptualization to meticulous planning, we bring innovative designs to life,
          ensuring each project is a harmonious fusion of aesthetics and structural integrity.
        </Work>
      </div>
    </motion.div>
  )
}

export default WorkDisplay;
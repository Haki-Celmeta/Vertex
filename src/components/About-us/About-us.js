import React from "react";
import interior from "../../assets/images/about-us-interior-design.jpg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './_about-us.scss';

const About = () => {
  const aboutVariant = {
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' }, y: 0 },
    hidden: { opacity: 0, y: '20px' },
  }

  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={aboutVariant}
      initial="hidden"
      animate={control}
      className="about-us-container"
    >
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
    </motion.div>
  )
};

export default About;
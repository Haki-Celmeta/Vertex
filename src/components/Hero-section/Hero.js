import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/line-right-arrow.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './_hero.scss';

const Hero = () => {
  const heroVariant = {
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' }, y: 0 },
    hidden: { opacity: 0, y: '20px' },
  }

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={heroVariant}
      initial="hidden"
      animate={control}
      className="hero-section"
    >
      <h1>Vertex Construction</h1>
      <h2>
        Vertex Construction delivers cutting-edge building solutions, blending innovation with uncompromising quality. From concept to completion, we excel in creating spaces that inspire, endure, and exceed expectations.
      </h2>
      <Link to="contact">Contact Now <img src={arrow} alt="line-arrow-right" /></Link>
    </motion.div>
  )
};

export default Hero;
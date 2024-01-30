import React from "react";
import SingleStatistic from "./Single-statistic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './_statistics.scss';

const Statistics = () => {
  const statisticsVariant = {
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' }, y: 0 },
    hidden: { opacity: 0, y: '20px' },
  }

  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={statisticsVariant}
      initial="hidden"
      animate={control}
      className="statistics-container"
    >
      <SingleStatistic numbers="1000+" title="Home Interior Design" />
      <SingleStatistic numbers="400+" title="Business Interior Design" />
      <SingleStatistic numbers="800+" title="Concrete Work" />
      <SingleStatistic numbers="300+" title="Architecture Design" />
    </motion.div>
  )
}

export default Statistics;
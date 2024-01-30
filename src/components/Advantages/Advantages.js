import React from "react";
import Advantage from "./Advantage";
import expertise from "../../assets/images/expertise-icon.png";
import innovative from "../../assets/images/innovation-icon.png";
import time from "../../assets/images/time-icon.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./_advantages.scss";

const Advantages = () => {
  const advantagesVariant = {
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
      variants={advantagesVariant}
      initial="hidden"
      animate={control}
      className="advantages-container"
    >
      <h2>Why Choose Us?</h2>
      <div className="advantage-cards">
        <Advantage title="Expertise and Experience" image={expertise}>
          Decades of industry experience, showcasing a deep understanding of construction principles and best practices.
        </Advantage>
        <Advantage title="Innovative Solutions" image={innovative}>
          Stay ahead with Vertex Construction – where creativity and forward-thinking drive our construction approach.
        </Advantage>
        <Advantage title="Timely Delivery" image={time}>
          Efficient project timelines backed by strategic planning and meticulous execution.
        </Advantage>
      </div>
    </motion.div>
  )
}

export default Advantages;
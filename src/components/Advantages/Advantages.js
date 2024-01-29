import React from "react";
import Advantage from "./Advantage";
import expertise from "../../assets/images/expertise-icon.png";
import innovative from "../../assets/images/innovation-icon.png";
import time from "../../assets/images/time-icon.png";
import "./_advantages.scss";

const Advantages = () => {
  return (
    <div className="advantages-container">
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
    </div>
  )
}

export default Advantages;
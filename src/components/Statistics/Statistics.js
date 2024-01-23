import React from "react";
import SingleStatistic from "./Single-statistic";
import './_statistics.scss';

const Statistics = () => {
  return (
    <div className="statistics-container">
      <SingleStatistic numbers="1000+" title="Home Interior Design" />
      <SingleStatistic numbers="400+" title="Business Interior Design" />
      <SingleStatistic numbers="800+" title="Concrete Work" />
      <SingleStatistic numbers="300+" title="Architecture Design" />
    </div>
  )
}

export default Statistics;
import React from "react";

const SingleStatistic = ({ numbers, title }) => {
  return (
    <div className="statistic">
      <h3>{numbers}</h3>
      <h2>{title}</h2>
    </div>
  )
}

export default SingleStatistic;
import React from "react";
import PropTypes from "prop-types";

import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  return (
    <div className="chart main-container p-2 my-4 rounded-xl bg-dark-002 flex justify-around h-60">
      {dataPoints.map(({ value, maxValue, label }, index) => (
        <ChartBar key={index} value={value} maxValue={maxValue} label={label} />
      ))}
      <ChartBar />
      <ChartBar />
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.array,
};

export default Chart;

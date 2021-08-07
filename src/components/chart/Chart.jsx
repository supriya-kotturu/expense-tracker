import React from "react";
import PropTypes from "prop-types";

import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  const dataPointValueArray = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValueArray);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }, index) => (
        <ChartBar
          key={index}
          value={value}
          maxValue={totalMaxValue}
          label={label}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.array,
};

export default Chart;

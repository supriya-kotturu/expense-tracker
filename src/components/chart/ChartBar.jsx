import React from "react";
import PropTypes from "prop-types";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar h-full w-3 flex flex-col items-center">
      <div className=" chart-bar-inner h-full w-full border-1 border-primary rounded-xl bg-primary overflow-hidden flex flex-col justify-end ">
        <div
          className="chart-bar-fill bg-secondary"
          style={{ height: "75%" }}
        ></div>
      </div>
      <div className="chart-bar-label">{label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
  label: PropTypes.string,
};

export default ChartBar;

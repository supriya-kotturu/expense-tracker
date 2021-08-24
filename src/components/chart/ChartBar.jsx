import { memo } from "react";
import PropTypes from "prop-types";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className=" chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: barFillHeight }}></div>
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

export default memo(ChartBar);

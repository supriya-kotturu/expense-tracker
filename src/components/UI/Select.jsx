import { memo } from "react";
import PropTypes from "prop-types";

const Select = ({
  heading,
  name,
  defaultVal,
  options,
  handleDropdownChange,
}) => {
  return (
    <div className="select-container">
      <label htmlFor={name} className="select-heading">
        {heading}
      </label>
      <select
        name={name}
        className="select-dropdown"
        defaultValue={defaultVal}
        onChange={handleDropdownChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  heading: PropTypes.string,
  name: PropTypes.string,
  defaultVal: PropTypes.string,
  options: PropTypes.array,
  handleDropdownChange: PropTypes.func,
};

export default memo(Select);

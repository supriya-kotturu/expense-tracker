import React from "react";
import PropTypes from "prop-types";

import Select from "./UI/Select";
const ExpenseFilter = ({ onChangeFilter, selected }) => {
  const options = [
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
  ];

  return (
    <div className="expense-filter-container px-4 py-2 m-2">
      <Select
        options={options}
        heading="Filter by Year"
        name="year"
        defaultVal={selected}
        handleDropdownChange={onChangeFilter}
      />
    </div>
  );
};

ExpenseFilter.propTypes = {
  onChangeFilter: PropTypes.func,
  selected: PropTypes.string,
};

export default ExpenseFilter;

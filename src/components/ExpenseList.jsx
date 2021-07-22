import { useState } from "react";
import PropTypes from "prop-types";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = (e) => {
    setFilteredYear(e.target.value);
    console.log("here", filteredYear);
  };

  return (
    <div className="main-container bg-dark-002 rounded-xl p-2">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      {expenses.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array,
};

export default ExpenseList;

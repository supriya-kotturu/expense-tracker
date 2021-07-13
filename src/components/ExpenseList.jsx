import PropTypes from "prop-types";

import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses }) => {
  return (
    <div className="main-container bg-dark-002 rounded-xl p-2">
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

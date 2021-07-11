import PropTypes from "prop-types";

import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses }) => {
  return (
    <div className="lg:w-1/2 md:w-3/4  mx-auto p-6">
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

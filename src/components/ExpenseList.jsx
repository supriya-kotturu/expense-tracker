import PropTypes from "prop-types";

import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ expenses }) => {
  return (
    <div className="lg:w-1/2 md:w-3/4  mx-auto p-6">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array,
};

export default ExpenseList;

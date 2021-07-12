import { Fragment } from "react";
import PropTypes from "prop-types";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Fragment>
      <div className="expense-itm-container">
        <ExpenseDate date={date} />
        <h1 className="text-2xl text-white-002 justify-self-start">{title}</h1>
        <p className="card py-3 px-6 text-center bg-dark-002 text-xl font-bold">
          ${amount}
        </p>
      </div>
    </Fragment>
  );
};

ExpenseItem.propTypes = {
  date: PropTypes.object,
  title: PropTypes.string,
  amount: PropTypes.number,
};

export default ExpenseItem;

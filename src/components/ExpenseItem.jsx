import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Fragment>
      <div className="expense-itm-container">
        <ExpenseDate date={date} />
        <h1 className="md:text-2xl sm:text-lg text-white-002 justify-self-start">
          {title}
        </h1>
        <div>
          <p className="text-base card py-2 px-3 overflow-hidden md:py-3 md:px-6 text-center bg-dark-002 md:text-xl font-bold">
            ${amount}
          </p>
        </div>
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

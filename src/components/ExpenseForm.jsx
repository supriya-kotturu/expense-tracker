import { useState } from "react";
import PropTypes from "prop-types";

import FormInput from "./UI/FormInput";
import errors from "../util/errors.json";
import ExpenseDate from "./ExpenseDate";
const ExpenseForm = ({ onSaveNewExpense, onCancelForm, onFormError }) => {
  const [userInput, setUserInput] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const handleExpenseTitle = (e) => {
    setUserInput({
      ...userInput,
      expenseTitle: e.target.value,
    });
  };

  const handleExpenseAmount = (e) => {
    setUserInput({
      ...userInput,
      expenseAmount: e.target.value,
    });
  };

  const handleExpenseDate = (e) => {
    setUserInput({
      ...userInput,
      expenseDate: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { expenseAmount, expenseDate, expenseTitle } = userInput;

    if (!expenseAmount && !expenseDate && !expenseTitle)
      onFormError(errors.noFormValuesError);
    if (!expenseTitle && expenseAmount && expenseDate)
      onFormError(errors.noTitleError);
    else if (!expenseAmount && expenseTitle && ExpenseDate)
      onFormError(errors.noAmountError);
    else if (!expenseDate && expenseTitle && expenseAmount)
      onFormError(errors.noDateError);

    const expenseData = {
      title: expenseTitle,
      amount: parseInt(expenseAmount),
      date: new Date(expenseDate),
    };

    if (expenseTitle && expenseAmount && expenseDate) {
      onSaveNewExpense(expenseData);
      setUserInput({
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: "",
      });
      onFormError(errors.clearFormError);
    }

    console.log(expenseData);
  };

  return (
    <form
      className=" main-container md:grid md:grid-flow-row justify-items-left grid-cols-2 gap-4 bg-dark-002 rounded-xl my-6 p-6"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="Title"
        name="title"
        type="text"
        value={userInput.expenseTitle}
        onChange={handleExpenseTitle}
      />
      <FormInput
        label="Amount"
        name="amount"
        type="number"
        value={userInput.expenseAmount}
        onChange={handleExpenseAmount}
        min="0.01"
        step="0.01"
      />
      <FormInput
        label="Date"
        name="date"
        type="date"
        value={userInput.expenseDate}
        onChange={handleExpenseDate}
        min="2019-01-01"
        max={new Date(new Date()).getDate() + 1}
      />
      <span className="mx-auto self-end">
        <button
          className="px-3 m-2 border-2 border-white-002 text-white-002 rounded-lg font-bold text-xl h-12 hover:bg-primary hover:text-color-001"
          type="button"
          onClick={onCancelForm}
        >
          Cancel
        </button>

        <button
          className="bg-color-002 border-2 border-color-002 px-3 m-2 text-primary rounded-lg font-bold text-xl h-12 hover:bg-primary hover:text-color-002 hover:border-2 hover:border-white-002"
          type="submit"
        >
          Submit
        </button>
      </span>
    </form>
  );
};

ExpenseForm.propTypes = {
  onSaveNewExpense: PropTypes.func,
  onCancelForm: PropTypes.func,
  onFormError: PropTypes.func,
};

export default ExpenseForm;

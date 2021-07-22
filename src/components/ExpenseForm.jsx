import { useState } from "react";
import PropTypes from "prop-types";

import FormInput from "./UI/FormInput";
const ExpenseForm = ({ onSaveNewExpense }) => {
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
    const { expenseAmount, expenseDate, expenseTitle } =
      userInput.expenseDate &&
      userInput.expenseTitle &&
      userInput.expenseAmount &&
      userInput;

    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };

    onSaveNewExpense(expenseData);

    console.log(expenseData);
    setUserInput({
      expenseTitle: "",
      expenseAmount: "",
      expenseDate: "",
    });
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
      <button
        className="bg-color-001 font-bold text-xl h-12 mx-auto self-end  px-3  m-2 rounded-lg text-primary "
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
};

ExpenseForm.propTypes = {
  onSaveNewExpense: PropTypes.func,
};

export default ExpenseForm;

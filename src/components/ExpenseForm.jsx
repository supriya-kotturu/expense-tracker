import { useState } from "react";

import FormInput from "./UI/FormInput";
const ExpenseForm = () => {
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

  return (
    <form className=" main-container md:grid md:grid-flow-row justify-items-left grid-cols-2 gap-4 bg-dark-002 rounded-xl my-6 p-6">
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

export default ExpenseForm;

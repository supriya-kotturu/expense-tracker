import { useState, useContext, memo } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
import ExpenseChart from "./ExpenseChart";

import { ExpenseListContext } from "../RootProvider";

const ExpenseList = () => {
  let { expenses } = useContext(ExpenseListContext);
  const [filteredYear, setFilteredYear] = useState("2021");

  // console.log(expenses);
  const filteredExpenses =
    expenses &&
    expenses.filter(
      (item) => new Date(item.date).getFullYear() === parseInt(filteredYear)
    );

  const handleFilterChange = (e) => {
    setFilteredYear(e.target.value);
    // console.log("here", filteredYear, filteredExpenses);
  };

  let expenseContent = (
    <Card className="m-1 p-6 text-center">
      <p>
        No expenses recorded this year
        <span className="text-xl">&#129488;</span>
      </p>
    </Card>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item, index) => (
      <ExpenseItem
        key={index}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ));
  }

  return (
    <div className="main-container bg-dark-002 rounded-xl p-2">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {expenseContent}
    </div>
  );
};

export default memo(ExpenseList);

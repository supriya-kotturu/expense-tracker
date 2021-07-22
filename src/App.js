import { useState } from "react";
import uuid from "react-uuid";

import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "IceCream",
      date: new Date(2021, 6, 10),
      amount: 1200,
    },
    {
      title: "Zomato Orders",
      date: new Date(2021, 6, 11),
      amount: 125445.55,
    },
    {
      title: "Cab",
      date: new Date(2021, 6, 10),
      amount: 700,
    },
    {
      title: "Lunch",
      date: new Date(2021, 6, 10),
      amount: 2400,
    },
    {
      title: "VadaPav",
      date: new Date(2021, 6, 10),
      amount: 60,
    },
  ]);

  const handleSaveNewExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: uuid(),
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="App">
      <header className="App-header font-serif text-secondary">
        <ExpenseForm onSaveNewExpense={handleSaveNewExpense} />
        <ExpenseList expenses={expenses} />
      </header>
    </div>
  );
}

export default App;

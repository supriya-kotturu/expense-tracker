import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Zomato Orders",
      date: new Date(2021, 6, 7),
      amount: 895,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header font-serif text-secondary">
        <ExpenseList expenses={expenses} />
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
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
      amount: 125,
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
  return (
    <div className="App">
      <header className="App-header font-serif text-secondary">
        <ExpenseList expenses={expenses} />
      </header>
    </div>
  );
}

export default App;

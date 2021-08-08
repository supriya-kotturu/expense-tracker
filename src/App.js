import { useState } from "react";
import uuid from "react-uuid";

import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseError from "./components/ExpenseError";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "IceCream",
      date: new Date(2021, 6, 10),
      amount: 1200,
    },
    {
      title: "Zomato Orders",
      date: new Date(2021, 3, 11),
      amount: 1254.55,
    },
    {
      title: "Cab",
      date: new Date(2021, 7, 10),
      amount: 700,
    },
    {
      title: "Lunch",
      date: new Date(2021, 2, 10),
      amount: 2400,
    },
    {
      title: "VadaPav",
      date: new Date(2021, 5, 10),
      amount: 60,
    },
  ]);

  const [message, setMessage] = useState({
    title: "",
    description: "",
    type: "",
    showMessage: false,
  });

  const [formStatus, setFormStatus] = useState(false);

  const handleSaveNewExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: uuid(),
    };

    setExpenses((previousExpenses) => [newExpense, ...previousExpenses]);
  };

  const handleCancelForm = () => {
    setFormStatus((previousFormStatus) => !previousFormStatus);
  };

  const handleShowForm = () => {
    setFormStatus(true);
  };

  const handleErrorMessage = (message) => {
    setMessage(message);
  };

  const handleCloseMessage = () => {
    setMessage((previousMessage) => {
      return {
        title: "",
        description: "",
        type: "",
        showMessage: !previousMessage.showMessage,
      };
    });
  };

  const formContentClassNames = `main-container my-4 bg-medium-001 justify-center flex rounded-md text-white-001 ${
    formStatus && "hidden"
  }`;

  let formContent = (
    <div className={formContentClassNames}>
      <button
        type="button"
        className="mx-auto bg-primary rounded-md p-3 text-lg font-bold text-white-002"
        onClick={handleShowForm}
      >
        Add New Expense
      </button>
    </div>
  );

  if (formStatus) {
    formContent = (
      <ExpenseForm
        onFormError={handleErrorMessage}
        onSaveNewExpense={handleSaveNewExpense}
        onCancelForm={handleCancelForm}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header font-serif text-secondary">
        <ExpenseError message={message} onCloseMessage={handleCloseMessage} />
        {formContent}
        <ExpenseList expenses={expenses} />
      </header>
    </div>
  );
}

export default App;

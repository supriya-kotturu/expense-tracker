import { useState, useCallback, memo } from "react";

import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseError from "./components/ExpenseError";
import RootProvider from "./RootProvider";

function App() {
  const [formStatus, setFormStatus] = useState(false);

  const handleCancelForm = useCallback(() => {
    setFormStatus((previousFormStatus) => !previousFormStatus);
  }, []);

  const handleShowForm = useCallback(() => {
    setFormStatus(true);
  }, []);

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
    formContent = <ExpenseForm onCancelForm={handleCancelForm} />;
  }

  return (
    <RootProvider>
      <div className="App font-serif text-secondary">
        <ExpenseError />
        {formContent}
        <ExpenseList />
      </div>
    </RootProvider>
  );
}

export default memo(App);

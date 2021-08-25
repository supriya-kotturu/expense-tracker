import { useReducer, createContext } from "react";

import expensesReducer, {
  initExpenses,
  initialState,
} from "./store/expenses/expensesReducer";
import messageReducer, {
  initialMessageState,
} from "./store/message/messageReducer";

export const ExpenseListContext = createContext({
  expenses: [],
  expensesDispatch: () => {},
});
export const MessageContext = createContext({
  message: {},
  messageDispatch: () => {},
});

const RootProvider = ({ children }) => {
  const [expenses, expensesDispatch] = useReducer(
    expensesReducer,
    initialState,
    initExpenses
  );
  const [message, messageDispatch] = useReducer(
    messageReducer,
    initialMessageState
  );

  return (
    <ExpenseListContext.Provider
      value={{ expenses: expenses.list, expensesDispatch: expensesDispatch }}
    >
      <MessageContext.Provider
        value={{ message: message, messageDispatch: messageDispatch }}
      >
        {children}
      </MessageContext.Provider>
    </ExpenseListContext.Provider>
  );
};

export default RootProvider;

import expenseAtionTypes from "./expensesActionTypes";

export function addNewExpense(newExpense) {
  return {
    type: expenseAtionTypes.ADD_NEW_EXPENSE,
    payload: newExpense,
  };
}

export function resetUserExpenses() {
  return {
    type: expenseAtionTypes.RESET_USER_EXPENSES,
  };
}

import uuid from "react-uuid";
import expenseAtionTypes from "./expensesActionTypes";

export const initialState = {
  list: [],
};

function getIsNewUserStatus() {
  return JSON.parse(localStorage.getItem("isNewUser")) === null
    ? true
    : JSON.parse(localStorage.getItem("isNewUser"));
}

function setIsNewUserStaus(isNewUserStatus) {
  localStorage.setItem("isNewUser", JSON.stringify(isNewUserStatus));
}
function getUserExpenseList() {
  return JSON.parse(localStorage.getItem("userExpenseList")) === null
    ? []
    : JSON.parse(localStorage.getItem("userExpenseList"));
}

function setUserExpenseList(expense) {
  const newUserExpense = {
    ...expense,
    id: uuid(),
  };
  const currentUserExpenseList = getUserExpenseList();
  currentUserExpenseList && setIsNewUserStaus(false);
  // console.log(newUserExpense, currentUserExpenseList);

  if (currentUserExpenseList.length > 0) {
    //   there are expenses stored in the browser's localStorage
    // console.log("in if ", newUserExpense, currentUserExpenseList);
    localStorage.setItem(
      "userExpenseList",
      JSON.stringify([newUserExpense, ...currentUserExpenseList])
    );
    return [newUserExpense, ...currentUserExpenseList];
  } else {
    // console.log("in else :", newUserExpense, currentUserExpenseList);
    localStorage.setItem("userExpenseList", JSON.stringify([newUserExpense]));
    return [newUserExpense];
  }
}

export function initExpenses() {
  const isNewUser = getIsNewUserStatus();
  const defaultExpensesList = [
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
  ];
  if (isNewUser) {
    setIsNewUserStaus(true);
    return { list: defaultExpensesList };
  } else {
    const userExpenseListInLocalStorage = getUserExpenseList();
    setIsNewUserStaus(false);

    if (userExpenseListInLocalStorage.length === 0) {
      return { list: defaultExpensesList };
    } else {
      return { list: userExpenseListInLocalStorage };
    }
  }
}

export default function expensesReducer(state, action) {
  switch (action.type) {
    case expenseAtionTypes.ADD_NEW_EXPENSE:
      return { list: setUserExpenseList(action.payload) };

    case expenseAtionTypes.RESET_USER_EXPENSES:
      setIsNewUserStaus(true);
      setUserExpenseList([]);
      return initialState;

    default:
      return state;
  }
}

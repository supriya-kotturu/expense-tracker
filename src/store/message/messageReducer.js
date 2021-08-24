import messageActionTypes from "./messageActionTypes";

export const initialMessageState = {
  title: "",
  description: "",
  type: "",
  showMessage: false,
};

export default function messageReducer(state, action) {
  switch (action.type) {
    case messageActionTypes.SET_SUCESS_MESSAGE:
      return {
        title: action.payload.title,
        description: action.payload.description,
        type: "SUCCESS",
        showMessage: true,
      };

    case messageActionTypes.SET_FAILURE_MESSAGE:
      return {
        title: action.payload.title,
        description: action.payload.description,
        type: "FAILURE",
        showMessage: true,
      };

    case messageActionTypes.RESET_MESSAGE:
      return initialMessageState;

    default:
      return state;
  }
}

import messageActionTypes from "./messageActionTypes";

export function setSuccessMessage(message) {
  return {
    type: messageActionTypes.SET_SUCESS_MESSAGE,
    payload: message,
  };
}

export function setFailureMessage(message) {
  return {
    type: messageActionTypes.SET_FAILURE_MESSAGE,
    payload: message,
  };
}

export function resetMessage() {
  return { type: messageActionTypes.RESET_MESSAGE };
}

import UserActionTypes from "./user-action-types";

const { SET_CURRENT_USER } = UserActionTypes;

// установить значение пользователя
export const setCurrentUserAction = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

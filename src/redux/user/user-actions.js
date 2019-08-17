import { UserActionTypes } from "./user-action-types";

const { SET_CURRENT_USER } = UserActionTypes;

export const setCurrentUserAction = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

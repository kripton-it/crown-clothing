import UserActionTypes from "./user-action-types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} = UserActionTypes;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        // currentUser: null, необязательно
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;

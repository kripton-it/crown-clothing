import UserActionTypes from "./user-action-types";

import userReducer, { INITIAL_STATE } from "./user-reducer";

const {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE
} = UserActionTypes;

const user = {
  id: 123
};

let newState;

describe("userReducer:", () => {
  it("should return the initial state", () => {
    expect(userReducer()).toEqual(INITIAL_STATE);
  });

  it("should handle SIGN_IN_SUCCESS", () => {
    newState = userReducer(INITIAL_STATE, {
      type: SIGN_IN_SUCCESS,
      payload: user
    });
    expect(newState.currentUser.id).toEqual(user.id);
    expect(newState.error).toEqual(INITIAL_STATE.error);
  });

  it("should handle SIGN_OUT_SUCCESS", () => {
    const state = {
      ...INITIAL_STATE,
      currentUser: user
    };
    newState = userReducer(state, {
      type: SIGN_OUT_SUCCESS
    });
    expect(newState.currentUser).toEqual(INITIAL_STATE.currentUser);
    expect(newState.error).toEqual(INITIAL_STATE.error);
  });

  it("should handle FAILURE actions", () => {
    const error = { message: "Error happened" };
    newState = userReducer(INITIAL_STATE, {
      type: SIGN_IN_FAILURE,
      payload: error
    });
    expect(newState.currentUser).toEqual(INITIAL_STATE.currentUser);
    expect(newState.error).toEqual(error);

    newState = userReducer(INITIAL_STATE, {
      type: SIGN_OUT_FAILURE,
      payload: error
    });
    expect(newState.currentUser).toEqual(INITIAL_STATE.currentUser);
    expect(newState.error).toEqual(error);

    newState = userReducer(INITIAL_STATE, {
      type: SIGN_UP_FAILURE,
      payload: error
    });
    expect(newState.currentUser).toEqual(INITIAL_STATE.currentUser);
    expect(newState.error).toEqual(error);
  });
});

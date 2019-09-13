import UserActionTypes from "./user-action-types";
import * as UserActions from "./user-actions";

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_START,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} = UserActionTypes;

const {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  checkUserStart,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure
} = UserActions;

describe("should create actions for user:", () => {
  it("googleSignInStart", () => {
    expect(googleSignInStart().type).toEqual(GOOGLE_SIGN_IN_START);
  });

  it("emailSignInStart", () => {
    const emailAndPassword = {
      email: "test@mail.ru",
      password: "12345"
    };

    const action = emailSignInStart(emailAndPassword);

    expect(action.type).toEqual(EMAIL_SIGN_IN_START);
    expect(action.payload).toEqual(emailAndPassword);
  });

  it("signInSuccess", () => {
    const user = {
      id: 1
    };

    const action = signInSuccess(user);

    expect(action.type).toEqual(SIGN_IN_SUCCESS);
    expect(action.payload).toEqual(user);
  });

  it("signInFailure", () => {
    const error = {
      message: "Error happened"
    };

    const action = signInFailure(error);

    expect(action.type).toEqual(SIGN_IN_FAILURE);
    expect(action.payload).toEqual(error);
  });

  it("checkUserStart", () => {
    expect(checkUserStart().type).toEqual(CHECK_USER_START);
  });

  it("signOutStart", () => {
    expect(signOutStart().type).toEqual(SIGN_OUT_START);
  });

  it("signOutSuccess", () => {
    expect(signOutSuccess().type).toEqual(SIGN_OUT_SUCCESS);
  });

  it("signOutFailure", () => {
    const error = {
      message: "Error happened"
    };

    const action = signOutFailure(error);

    expect(action.type).toEqual(SIGN_OUT_FAILURE);
    expect(action.payload).toEqual(error);
  });

  it("signUpStart", () => {
    const userData = {
      id: 1
    };

    const action = signUpStart(userData);

    expect(action.type).toEqual(SIGN_UP_START);
    expect(action.payload).toEqual(userData);
  });

  it("signUpSuccess", () => {
    const payload = {
      user: null,
      additionalData: {}
    };

    const action = signUpSuccess(payload);

    expect(action.type).toEqual(SIGN_UP_SUCCESS);
    expect(action.payload).toEqual(payload);
  });

  it("signUpFailure", () => {
    const error = {
      message: "Error happened"
    };

    const action = signUpFailure(error);

    expect(action.type).toEqual(SIGN_UP_FAILURE);
    expect(action.payload).toEqual(error);
  });
});

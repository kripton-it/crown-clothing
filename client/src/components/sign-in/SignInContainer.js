import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user-actions";

import SignIn from "./SignIn";

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

const SignInContainer = connect(
  null,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;

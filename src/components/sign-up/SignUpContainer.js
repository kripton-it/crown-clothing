import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user-actions";

import SignUp from "./SignUp";

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData))
});

const SignUpContainer = connect(
  null,
  mapDispatchToProps
)(SignUp);

export default SignUpContainer;

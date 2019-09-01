import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signUpStart } from "../../redux/user/user-actions";

import { SignUpContainer, TitleContainer } from "./SignUpStyles";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: ""
    };
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      alert("Passwords don't match!");
      return;
    }

    await signUpStart({ email, password, displayName });
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: ""
    });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

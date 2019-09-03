import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { SignUpContainer, TitleContainer } from "./SignUpStyles";

const defaultUserInfo = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: ""
};

const SignUp = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const { displayName, email, password, confirmedPassword } = userInfo;

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (password !== confirmedPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          label="Confirm Password"
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;

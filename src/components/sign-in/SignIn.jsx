import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer
} from "./SignInStyles";

const defaultUserInfo = {
  email: "",
  password: ""
};

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const { email, password } = userInfo;

  const handleSubmit = async evt => {
    evt.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;

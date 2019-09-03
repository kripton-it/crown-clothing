import React from "react";

import SignInContainer from "../../components/sign-in/SignInContainer";
import SignUpContainer from "../../components/sign-up/SignUpContainer";

import { RegistrationPageContainer } from "./RegistrationPageStyles";

const RegistationPage = () => {
  return (
    <RegistrationPageContainer>
      <SignInContainer />
      <SignUpContainer />
    </RegistrationPageContainer>
  );
};

export default RegistationPage;

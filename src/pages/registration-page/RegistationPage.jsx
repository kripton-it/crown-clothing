import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import { RegistrationPageContainer } from "./RegistrationPageStyles";

const RegistationPage = () => {
  return (
    <RegistrationPageContainer>
      <SignIn />
      <SignUp />
    </RegistrationPageContainer>
  );
};

export default RegistationPage;

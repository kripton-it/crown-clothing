import React from 'react';

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

import './RegistrationPage.styles.scss'


const RegistationPage = () => {
  return (
    <div className="registration-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default RegistationPage;
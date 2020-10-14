import React from 'react';
import SignInForm from './SignIn';
import RegisterForm from './Register';
import './signIn.sass';

const SignIn = () => {
  return (
    <div className="sign-in-register">
      <SignInForm />
      <RegisterForm />
    </div>
  );
};

export default SignIn;

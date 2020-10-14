import React, { useState, FormEvent } from 'react';
import FormInput from '../../components/formInput';
import { auth, createUserProfileDocument } from '../../firebase.utils';

const SignIn = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setemail('');
      setPassword('');
      setDisplayName('');
      setConfirmPassword('');
    } catch (error) {
      alert('unkown error');
      console.error(error);
    }
  };

  return (
    <div className="form register">
      <div className="form__header">
        <h2>I do not have an account</h2>
        <h3>Sign up with your email and password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          value={email}
          handleChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <FormInput
          label="Display Name"
          value={displayName}
          handleChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />
        <FormInput
          type="password"
          label="Password"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormInput
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button type="submit" className="form-btn">
          sign up
        </button>
      </form>
    </div>
  );
};

export default SignIn;

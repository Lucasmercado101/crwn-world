import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import FormInput from '../../components/formInput';
import { auth } from '../../firebase.utils';
import Session from '../../unstated/session';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = Session.useContainer();
  const history = useHistory();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('loggedIn', 'true');
      logIn();
      history.push('/');
    } catch (error) {
      alert('unkown error');
      console.error(error);
    } finally {
      setPassword('');
      setEmail('');
    }
  };

  return (
    <div className="form sign-in">
      <div className="form__header">
        <h2>I already have an account</h2>
        <h3>Sign in with your email and password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value);
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
        <div className="form-buttons-container">
          <button type="submit" className="form-btn">
            sign in
          </button>
          <button className="form-btn form-btn--blue">
            sign in with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

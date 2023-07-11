import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Register = (props) => {
  // component that is imported by main App.js file to display
  const [email_input, setEmail] = useState('');
  const [password_input, setPassword] = useState('');
  const [firstName_input, setFirstName] = useState('');
  const [lastName_input, setLastName] = useState('');
  const [displayName_input, setdisplayName] = useState('');
  const [confirmPassword_input, setConfirmPassword] = useState('');
  // const { setJwtToken } = useContext(AuthContext);
  const accessToken = useContext(AuthContext);
  const isLoggedIn = useContext(AuthContext);
  const navigate = useNavigate();

  // action when submitting form
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(email);

    const requestBody = {
      email: email_input,
      password: password_input,
      firstName: firstName_input,
      lastName: lastName_input,
      displayName: displayName_input,
    };

    axios
      .post('api/auth/register', requestBody)
      .then((response) => {
        console.log('successfully registered');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // what is displayed - return value
  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName_input}
            autocomplete="off"
            required
            // onFocus={() => setUserFocus(true)}
            // onBlur={() => setUserFocus(false)}
            type="text"
            // placeholder="John Doe"
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName_input}
            type="text"
            autocomplete="off"
            required
            // placeholder="John Doe"
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="displayName">username</label>
          <input
            value={displayName_input}
            type="text"
            autocomplete="off"
            required
            // placeholder="johndoe123"
            id="displayName"
            name="displayName"
            onChange={(e) => setdisplayName(e.target.value)}
          />

          <label htmlFor="email">email</label>
          <input
            value={email_input}
            type="email"
            autocomplete="off"
            required
            // placeholder="youremail@example.com"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">password</label>
          <input
            value={password_input}
            type="password"
            autocomplete="off"
            required
            // placeholder="********"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">confirm password</label>
          <input
            value={confirmPassword_input}
            type="password"
            autocomplete="off"
            required
            // placeholder="********"
            id="confirm-password"
            name="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate('/login')}
        >
          Already have an account? Log in here.
        </button>
      </div>
    </div>
  );
};

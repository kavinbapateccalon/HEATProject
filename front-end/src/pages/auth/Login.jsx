import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email_input, setEmail] = useState('');
  const [password_input, setPassword] = useState('');
  const { setAccessToken, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('isLoggedIn:', '');
  // }, [setIsLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();

    const requestBody = {
      email: email_input,
      password: password_input,
    };
    axios
      .post('api/auth/login', requestBody)
      .then((response) => {
        const token = response.data.token;
        setAccessToken(token);
        setIsLoggedIn(true);
        navigate('/welcome');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Rest of the component code

  // what is displayed - return value
  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Log In</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">email</label>
          <input
            value={email_input}
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">password</label>
          <input
            value={password_input}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate('/register')}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

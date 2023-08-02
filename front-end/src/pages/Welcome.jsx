import React from 'react';
import AuthContext from '../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Welcome = (props) => {
  const { accessToken, isLoggedIn } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && isLoggedIn) {
      axios
        .get('/api/user/get', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          console.log(response.data.firstName);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [accessToken, isLoggedIn]);

  return (
    <>
      <div className="App">
        <div className="auth-form-container">
          <h1>Welcome to HEAT {user && user.firstName}!</h1>
          <br />
          <p>
            Please fill out the questionnaire to start using your
            Health Education Awareness Team Account.
          </p>
          <div>
            <button
              className="button"
              onClick={() => navigate('/metric-questions')}
            >
              Start Questionnaire
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

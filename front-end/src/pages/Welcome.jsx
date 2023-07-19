import React from 'react';
import AuthContext from '../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import '../App.css';

const Welcome = (props) => {
  const { accessToken, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <div className="auth-form-container">
          <h1>Welcome to HEAT User!</h1>
          <br />
          <p>
            Please fill out the questionnaire to start using your
            Health Education Awareness Team Account.
          </p>
          <div>
            <button
              className="button"
              onClick={() => navigate('/survey')}
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

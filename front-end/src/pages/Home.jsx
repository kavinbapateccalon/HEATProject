import React from 'react';
import AuthContext from '../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import '../App.css';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <div className="auth-form-container">
          <h1>HEAT Homepage</h1>
          <br />
          <p>Get started by registering an account</p>
          <div>
            <button
              className="button"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

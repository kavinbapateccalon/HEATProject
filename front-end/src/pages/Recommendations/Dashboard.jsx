import React from 'react';
import AuthContext from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import '../../App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="column">
        <div className="container">Fitness recommendations</div>
        <div className="container">Nutrition recommendations</div>
      </div>
      <div className="column">
        <div className="container">
          Mental well-being recommendations
        </div>
        <div className="container">Commnity</div>
      </div>
    </div>
  );
};

export default Dashboard;

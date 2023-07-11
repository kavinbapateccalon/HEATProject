import React from 'react';
import AuthContext from '../utils/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import '../App.css';

// render children if we are authenticated, if we are not authenticated redirect to login
const PrivateRoute = ({ children }) => {
  const { accessToken, isLoggedIn } = useContext(AuthContext);
  if (!!accessToken && isLoggedIn == false) {
    return <Navigate to="/login" />;
  } else if (accessToken && isLoggedIn) {
    return children;
  }
};

export default PrivateRoute;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Survey } from './pages/Survey';
import Welcome from './pages/Welcome';

import { AuthProvider } from './utils/AuthProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/questionnaire"
            element={
              <PrivateRoute>
                <Survey />
              </PrivateRoute>
            }
          />
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <Welcome />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

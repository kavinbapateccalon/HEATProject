import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import Welcome from './pages/Welcome';
import { Survey } from './pages/Survey';
import { MetricSurvey } from './pages/MetricSurvey';
import Home from './pages/Home';
import Dashboard from './pages/Recommendations/Dashboard';
import Navbar from './utils/Navbar';
import { Community } from './pages/Community/Recommendations';
import Friends from './pages/Community/Friends';
import Feed from './pages/Community/Feed';
import Groups from './pages/Community/Groups';
import { AuthProvider } from './utils/AuthProvider';
import Fitness from './pages/Recommendations/Fitness';
import Nutrition from './pages/Recommendations/Nutrition';
import MentalHealth from './pages/Recommendations/MentalHealth';
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
          <Route path="/" element={<Home />} />
          <Route
            path="/survey"
            element={
              <PrivateRoute>
                <Survey />
              </PrivateRoute>
            }
          />
          <Route
            path="/metricsurvey"
            element={
              <PrivateRoute>
                <MetricSurvey />
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
          <Route
            path="/logout"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/recommendations/*"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/recommendations/fitness"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Fitness />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/recommendations/nutrition"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Nutrition />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/recommendations/mental-health"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <MentalHealth />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/community/*"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Feed />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/community/friends"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Friends />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/community/groups"
            element={
              <>
                <Navbar />
                <PrivateRoute>
                  <Groups />
                </PrivateRoute>
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

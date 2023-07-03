import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Survey } from "./pages/Survey"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <><Router>
        <Routes>
            <Route path='/' element={currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} /> 
            <Route path='/questionnaire' element={<Survey />} />

        </Routes>

    </Router>
        

      </>
  );
}

export default App;

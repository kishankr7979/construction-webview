import React from 'react';
import logo from './logo.svg';
import ForgotPassword from './forgot-password';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import RouterConfig from './config/RouterConfig';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterConfig />
      </Router>
    </div>
    
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import UserInterface from './components/js/userInterface';
import FingerprintChecks from './components/js/dataprocessing/fingerprintChecks';
import CookieReader from './components/js/dataprocessing/cookieReader';
import BackgroundData from './components/js/dataprocessing/backgroundData';

function App() {
  return (
    <div className="App">
      <UserInterface />
      <FingerprintChecks />
      <CookieReader />
      <BackgroundData />
    </div>
  );
}

export default App;
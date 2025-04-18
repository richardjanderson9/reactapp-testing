// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import packageJson from '../package.json';

function App() {
  const appVersion = packageJson.version;
  const appName = packageJson.name;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Name: {appName}
          <br></br>
          Version: {appVersion}
        </p>
      </header>
    </div>
  );
}

export default App;
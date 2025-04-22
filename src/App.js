// src/App.js
import React, { memo } from 'react';
import logo from './logo.svg';
import './App.css';
import packageJson from '../package.json';

const AppHeader = memo(({ appName, appVersion }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Name: {appName}
      <br />
      Version: {appVersion}
    </p>
  </header>
));

AppHeader.displayName = 'AppHeader';

function App() {
  const { version: appVersion, name: appName } = packageJson;

  return (
    <div className="App">
      <AppHeader appName={appName} appVersion={appVersion} />
    </div>
  );
}

export default App;
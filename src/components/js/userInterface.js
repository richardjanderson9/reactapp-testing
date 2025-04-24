// React Imports!
import React, { useState, useEffect } from 'react';
// Application Imports!
import '../../App.css'; // Stylesheet for the application.
// Custom Imports!
import packageJson from '../../../package.json'; // Importing package.json to get the version and name of the app.
import logo from '../../logo.svg'; // Importing the logo for the application.
import { getCookie } from './dataprocessing/cookieReader';

const UserInterface = () => {
  const { version: appVersion, name: appName } = packageJson;
  const [fingerprint, setFingerprint] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      const fpValue = getCookie('fingerprint');
      setFingerprint(fpValue || 'Not found');
    }, 600); // Simulating a delay to mimic the fingerprint retrieval process.
  }, []);

  const handleRepoClick = () => {
    window.open('https://github.com/richardjanderson9/reactapp-testing', '_blank');
  };

  return (
    <div className="interface-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: {appName}
          <br />
          Version: {appVersion}
        </p>
        <button className="github-button" onClick={handleRepoClick}>
          View Source on GitHub
        </button>
        <small className="fingerprint-text">
          Fingerprint: {fingerprint}
        </small>
      </header>
    </div>
  );
};

UserInterface.displayName = 'UserInterface';

export default UserInterface;
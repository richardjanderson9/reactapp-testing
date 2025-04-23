// React Imports!
import React, { memo } from 'react';
// Application Imports!
import '../../App.css'; // Stylesheet for the application.
// Custom Imports!
import packageJson from '../../../package.json'; // Importing package.json to get the version and name of the app.
import logo from '../../logo.svg'; // Importing the logo for the application.


const UserInterface = memo(() => {
  const { version: appVersion, name: appName } = packageJson;

  const handleRepoClick = () => {
    window.open('https://github.com/richardjanderson9/reactapp-testing', '_blank');
  };

  return (
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
    </header>
  );
});

UserInterface.displayName = 'UserInterface';

export default UserInterface;
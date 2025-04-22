import React, { memo } from 'react';
import packageJson from '../../../package.json';
import logo from '../../logo.svg';
import '../../App.css';

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
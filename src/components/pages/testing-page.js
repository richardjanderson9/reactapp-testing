/*
  Path -- /src/components/pages/testing-page.js
  Description -- This file contains the Testing component, accessible from the main interface.
  Author -- [Richard Anderson]
  Last Updated -- [12-May-2025]
  Version -- 1.0.0
*/

import React from 'react'; // Importing React for building the user interface.
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation between routes.
import '../../App.css'; // Stylesheet for the application.

const Testing = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the main page
  };

  return (
    <div className="interface-container">
      <header className="App-header">
        <h1>Testing Page</h1>
        <p>This is the testing page of the application.</p>
        <button className="live-button" onClick={handleBackClick}>
          Back to Home
        </button>
      </header>
    </div>
  );
};

Testing.displayName = 'Testing'; // Setting the display name for better debugging

export default Testing;
/*
  Path -- /src/App.js
  Description -- This file contains the main application component for a React application.
  Author -- [Richard Anderson]
  Last Updated -- [27-April-2025]
  Version -- 1.0.0
*/

// React Imports!
import React from 'react';
// Application Imports!
import './App.css'; // CSS stylesheet for the application.
// Custom Imports!
import UserInterface from './components/js/userInterface'; // Calls the user interface component.
import DataChecks from './components/js/dataChecks' // Calls the data checks component.

// Main Application Function.
function App() {
  return (
    <div className="App">
      {/* Calls User Interface! */}
      <UserInterface />
      {/* Calls Browser Checks!*/}
      <DataChecks />
    </div>
  );
}

export default App; // Exporting the App component for use in other files.
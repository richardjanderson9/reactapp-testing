/*
  Path -- /src/App.js
  Description -- This file contains the main application component for a React application.
  Author -- [Richard Anderson]
  Last Updated -- [12-May-2025]
  Version -- 1.0.1
*/

// React Imports!
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Application Imports!
import './App.css'; // CSS stylesheet for the application.
// Custom Imports!
import UserInterface from './components/js/userInterface'; // Calls the user interface component.
import DataChecks from './components/js/dataChecks' // Calls the data checks component.
import Testing from './components/pages/testing-page';

// Main Application Function.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">
          {/* Calls User Interface! */}
          <UserInterface />
          {/* Calls Browser Checks!*/}
          <DataChecks />
        </div>} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component for use in other files.
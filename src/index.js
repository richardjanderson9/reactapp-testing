/*
  Path -- /src/Index.js
  Description -- This file is the entry point for the React application. It renders the main application component into the root element of the HTML document.
  Author -- [Richard Anderson]
  Last Updated -- [27-April-2025]
  Version -- 1.0.0
*/

// React Imports!
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// Application Imports!
import App from './App'; // Calls the main application.
import './index.css'; // Stylesheet for the application.
// Custom Imports!
import DomainRedirect from './components/js/urlChecks';

// Function to check if the domain is valid and display the application.
function DisplayApplication() {
  const [domainValid, setDomainValid] = useState(false);
  // Check if the domain is valid.
  return (
    <>
      {!domainValid && (
        <DomainRedirect onComplete={(isValid) => setDomainValid(isValid)} />
      )}
      {domainValid && <App />}
    </>
  );
}

// Create a root element for React to render into.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application into the root element.
root.render(
  <React.StrictMode>
    {/* Calls the main application. */}
    <DisplayApplication />
  </React.StrictMode>
);
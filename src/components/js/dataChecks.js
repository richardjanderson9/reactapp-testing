/*
  Path -- /src/components/js/dataChecks.js
  Description -- This file contains the DataChecks component, which is responsible for handling data checks in the application.
  Author -- [Richard Anderson]
  Last Updated -- [27-April-2025]
  Version -- 1.0.0
*/

// React Imports!
import React from 'react';
// Custom Imports!
//import BackgroundData from './dataprocessing/backgroundData'; // BackgroundData.js
import FingerprintChecks from './dataprocessing/fingerprintChecks'; // FingerprintChecks.js
import CookieReader from './dataprocessing/cookieReader'; // CookieReader.js

// Main function for DataChecks component.
function DataChecks() {
  return (
    <div className="App">
      {/* Calls Browser Checks!
      <BackgroundData /> */}
      <FingerprintChecks />
      {/* Checks for local security cookies [set via cloudflare!] */}
      <CookieReader />
    </div>
  );
}

export default DataChecks; // Exporting the DataChecks component for use in other files.
// React Imports!
import React from 'react';
// Custom Imports!
import BackgroundData from './dataprocessing/backgroundData'; // BackgroundData.js
import FingerprintChecks from './dataprocessing/fingerprintChecks'; // FingerprintChecks.js
import CookieReader from './dataprocessing/cookieReader'; // CookieReader.js

// Main function for DataChecks component.
function DataChecks() {
  console.log('DataChecks!');
  return (
    <div className="App">
      {/* Calls Browser Checks! */}
      <BackgroundData />
      <FingerprintChecks />
      {/* Checks for local security cookies [set via cloudflare!] */}
      <CookieReader />
    </div>
  );
}

export default DataChecks;
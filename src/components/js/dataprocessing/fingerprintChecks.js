// React Imports!
import { useEffect } from 'react';
// Custom Imports!
import CookieWriter from './cookieWriter';

const FingerprintChecks = () => {
  // Main code (has been altered) from https://www.npmjs.com/package/@fingerprintjs/fingerprintjs
  useEffect(() => {
    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
      .then(FP => FP.load());
    
    fpPromise
      .then(fp => fp.get())
      .then(result => {
        console.log("Fingerprint is: ", result.visitorId);
      })
      .catch(e => console.error("Failed to load fingerprint JS: ", e));
  }, []);

  // Testing call to CookieWriter
  CookieWriter();

  return null;
};

export default FingerprintChecks;
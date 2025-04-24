// React Imports!
import { useEffect, useRef } from 'react';
// Custom Imports!
import urldata from '../json/urlData.json'; // Importing URL data from a JSON file.

const DomainRedirect = ({ onComplete }) => {  
  const hasLogged = useRef(false);

  useEffect(() => {
    if (hasLogged.current) return;
    hasLogged.current = true;

    const currentDomain = window.location.hostname;
    let isValidDomain = false;
    let matchedEnv = null;

    // Check if domain matches any environment.
    Object.entries(urldata.environments).forEach(([env, data]) => {
      data.domains.forEach(domain => {
        if (env === 'live') {
          const domainRegex = new RegExp(`^(?:[\\w-]+\\.)*${domain.replace('.', '\\.')}$`);
          if (domainRegex.test(currentDomain)) {
            isValidDomain = true;
            matchedEnv = env;
          }
        } else if (currentDomain === domain) {
          isValidDomain = true;
          matchedEnv = env;
        }
      });
    });

    if (!isValidDomain) {
      console.warn(`⚠️ Warning: ${currentDomain} is not a recognized domain. Please use a valid testing or live domain.`);
    } else if (matchedEnv === 'live') {
      console.info(`🔧 Running in live environment on ${currentDomain}`);
    } else {
      console.info(`🔧 Running in testing environment on ${currentDomain}`);
    }

    // Call onComplete callback with the result.
    if (onComplete) {
      onComplete(isValidDomain);
    }

    return () => {
      hasLogged.current = false;
    };
  }, [onComplete]);

  return null; // No UI component to render.
};

export default DomainRedirect;
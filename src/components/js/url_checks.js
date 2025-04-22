/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import urldata from '../json/url_data.json'

const DomainRedirect = () => {  
  const hasLogged = useRef(false);

  useEffect(() => {
    if (hasLogged.current) return;
    hasLogged.current = true;

    const currentDomain = window.location.hostname;
    let isValidDomain = false;

    // Check if domain matches any environment
    Object.entries(urldata.environments).forEach(([env, data]) => {
      data.domains.forEach(domain => {
        // For live environment, check for subdomains
        if (env === 'live') {
          const domainRegex = new RegExp(`^(?:[\\w-]+\\.)*${domain.replace('.', '\\.')}$`);
          if (domainRegex.test(currentDomain)) {
            isValidDomain = true;
          }
        } else if (currentDomain === domain) {
          isValidDomain = true;
        }
      });
    });

    // Display appropriate warning based on environment
    if (!isValidDomain) {
      console.warn(`⚠️ Warning: ${currentDomain} is not a recognized domain. Please use a valid testing or live domain.`);
    } else {
      console.info(`🔧 Running in testing environment on ${currentDomain}`);
    }

    return () => {
      hasLogged.current = false;
    };
  }, []);

  return null;
};

export default DomainRedirect;
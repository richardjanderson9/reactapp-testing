// React Imports!
import { useEffect, useRef } from 'react';
// Custom Imports!
import urldata from '../json/urlData.json'; // Importing URL data from a JSON file.
import { setCookie } from './dataprocessing/cookieWriter';

const DomainRedirect = ({ onComplete }) => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (hasLogged.current) return;
    hasLogged.current = true;

    const currentDomain = window.location.hostname
    
    // Domain matching logic as a one-liner map/filter/find combination.
    const matchedEnv = urldata.environments.find(env => {
      const matcher = {
        exact: d => d.includes(currentDomain),
        exactOrSubdomain: d => d.some(domain => currentDomain === domain || currentDomain.endsWith(`.${domain}`)),
        includes: d => d.some(domain => currentDomain.includes(domain))
      }[env.matchType];
      
      return matcher && matcher(env.domains);
    });

    if (matchedEnv) {
      setCookie('env', matchedEnv.name);
      onComplete(matchedEnv.isValid);
    } else {
      onComplete(false);
    }

    return () => {
      hasLogged.current = false;
    };
  }, [onComplete]);

  return null; // No UI component to render.
};

export default DomainRedirect;
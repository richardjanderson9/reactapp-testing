// React Imports!
import React from 'react';
// Custom Imports!
import CookieData from '../../json/cookieWriter.json';

/**
 * Function to find all cookies from a JSON object that have source set to "external"
 * @param {Object} cookieData - The JSON object containing cookie information
 * @returns {Array} - Array of cookies with source set to "external"
 */
export const getExternalCookies = (cookieData) => {
  if (!cookieData || !cookieData.cookies || !Array.isArray(cookieData.cookies)) {
    console.error('Invalid cookie data structure');
    return [];
  }

  return cookieData.cookies.filter(cookie => cookie.source === "external");
};

// Generic function to set a cookie with value and options
export const setCookie = (cookieName, value, options = {}) => {
    const cookie = CookieData.cookies.find(c => c.Name === cookieName);
    if (cookie) {
        const domain = window.location.hostname;
        const maxAge = (options.maxAge || cookie.time) * 24 * 60 * 60; // Convert days to seconds
        let cookieString = `${cookieName}=${value}; max-age=${maxAge}; path=/; domain=${domain}`;
        
        if (cookie.securitybased || options.secure) {
            cookieString += `${window.location.protocol === 'https:' ? '; secure' : ''}`;
        }
        
        cookieString += '; SameSite=Lax';
        document.cookie = cookieString;
    }
};

/**
 * Sets external cookies on the machine with null values
 */
export const setExternalCookies = () => {
  // Skip the separate function call and filter directly
  if (!CookieData || !CookieData.cookies || !Array.isArray(CookieData.cookies)) {
    console.error('Invalid cookie data structure');
    return;
  }

  CookieData.cookies
    .filter(cookie => cookie.source === "external")
    .forEach(cookie => {
      setCookie(cookie.Name, 'null', {
        secure: cookie.securitybased
      });
    });
};

const CookieWriter = () => {
    // Component logic for handling default cookies
    React.useEffect(() => {
        // Set external cookies with null values
        setExternalCookies();
        
        const requiredCookies = window.requiredCookies || [];
        requiredCookies.forEach(cookieName => {
            setCookie(cookieName, 'default_value');
        });
    }, []);

    return null; // No UI component to render.
};

export default CookieWriter;
// React Imports!
import React from 'react';
// Custom Imports! (for testing purposes, sets cloudflare cookies to enable testing.)
import CloudflareCookies from './cloudflareCookies'; // CloudflareCookies.js
// Import the cookie writer functionality
import { setExternalCookies } from './cookieWriter';

// Centralized cookie reading function
export const getCookie = (cookieName) => {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.trim().startsWith(`${cookieName}=`));
    return cookie ? cookie.split('=')[1] : null;
};

const CookieReader = () => {
    React.useEffect(() => {
        // Set external cookies first
        try {
            setExternalCookies();
        } catch (error) {
            // Handle error silently
        }        
        // Then execute CloudflareCookies functionality
        CloudflareCookies.getEnvironmentCookie();
    }, []);

    return null; // No UI component to render.
};

export default CookieReader;
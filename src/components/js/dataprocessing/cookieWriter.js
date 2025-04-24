// React Imports!
import React from 'react';
// Custom Imports!
import CookieData from '../../json/cookieWriter.json';

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

const CookieWriter = () => {
    // Component logic for handling default cookies
    React.useEffect(() => {
        const requiredCookies = window.requiredCookies || [];
        requiredCookies.forEach(cookieName => {
            setCookie(cookieName, 'default_value');
        });
    }, []);

    return null; // No UI component to render.
};

export default CookieWriter;
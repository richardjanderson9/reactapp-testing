// React Imports!
import React from 'react';

// Centralized cookie reading function
export const getCookie = (cookieName) => {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.trim().startsWith(`${cookieName}=`));
    return cookie ? cookie.split('=')[1] : null;
};

const CookieReader = () => {
    React.useEffect(() => {
        // Any initial cookie reading logic can go here
    }, []);

    return null; // No UI component to render.
};

export default CookieReader;
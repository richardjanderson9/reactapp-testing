// Custom Imports!
import { getCookie } from './cookieReader';
import cookieJson from '../../json/cookieWriter.json';

// Function to set test cookies
const setTestCookies = () => {
    document.cookie = "env=development;path=/";
};

// Function to read and pass through cookie values
const getEnvironmentCookie = () => {
    const envCookie = getCookie('env');
    return envCookie;
};

// Export both functions
export default {
    setTestCookies,
    getEnvironmentCookie
};
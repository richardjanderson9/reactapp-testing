// Custom Imports!
import { getCookie } from './cookieReader';

// CloudflareCookies module object
const CloudflareCookies = {
    // Function to set test cookies
    setTestCookies: () => {
        document.cookie = "env=development;path=/";
    },

    // Function to read and pass through cookie values
    getEnvironmentCookie: () => {
        const envCookie = getCookie('env');
        return envCookie;
    }
};

export default CloudflareCookies;
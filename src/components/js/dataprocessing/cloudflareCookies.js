/*
  Path -- /src/components/js/dataprocessing/cloudflareCookies.js
  Description -- This file contains the BackgroundData component, which is responsible for handling background data processing tasks.
  State -- This file enables the application to read cookies set by Cloudflare and pass them through to the application.
  Author -- [Richard Anderson]
  Last Updated -- [27-April-2025]
  Version -- 1.0.0
*/

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

export default CloudflareCookies; // Exporting the CloudflareCookies module for use in other files.
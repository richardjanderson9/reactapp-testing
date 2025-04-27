// React Imports!
import { useEffect, useRef } from 'react'; // React imports for managing side effects and refs.
// Custom Imports!
import urlCustom from '../json/urlCustom.json'; // Importing URL Hosting dat (custom doamin) from a JSON file.
import urlEnv from '../json/urlEnv.json'; // Importing URL Hosting data (environment) from a JSON file.
import { setCookie } from './dataprocessing/cookieWriter'; // Importing the cookie writer function from a custom module.

const DomainRedirect = ({ onComplete }) => {
    const currentDomain = (window.location.hostname.toLowerCase()); // Get the current domain and convert to lowercase.
    const isValidDomain = useRef(false); // Ref to track if the domain is valid.

    useEffect(() => {
        // Enforces redirect to the preferred domain if the current domain is not valid.
        const forceRedirect = (newDomain) => {
            window.location.href = (newDomain.startsWith('http') ? newDomain : `https://${newDomain}`); // Redirect to the preferred domain.
        };
        
        // Sets a cookie with the current environment.
        const cookieWriter = (hostingStage) => {
            setCookie('env', hostingStage, {}); // Use 'env' which is defined in cookieWriter.json
        }
        
        // Checks if the current domains is within the allowed domains (Live, Hosting, or Testing). [Within urlEnv.json ONLY!]
        const matchedEnvironment = urlEnv.environments.find(env => 
            env.domains.some(domain => 
                (env.matchType === 'exact' && domain === currentDomain) || 
                (env.matchType === 'includes' && currentDomain.includes(domain)) || 
                (env.matchType === 'exactOrSubdomain' && (domain === currentDomain || currentDomain.endsWith('.' + domain)))
            )
        );

        // Stores data within various variables. [Information at end of each line.]
        const storedUrlCustom = (urlCustom.correctUrl.some(url => url.domain === currentDomain)); // Check if the current domain is in the custom URL list. [Source: urlCustom.json].
        const storedUrlEnv = (matchedEnvironment ? matchedEnvironment.isValid : false); // Check if the current domain is in the environment list. [Source: urlEnv.json].
        const storedEnv = (matchedEnvironment ? matchedEnvironment.name : 'inValid'); // Get the environment name. [Source: urlEnv.json].
        const storedDomain = (urlCustom.correctUrl.find(url => url.status === "preferred")?.domain || ""); // Get the preferred domain from the custom URL list. [Source: urlCustom.json].

        // Testing!
        if ((storedUrlCustom === false && storedUrlEnv === false) && (storedEnv === 'inValid')) {
            forceRedirect(storedDomain); // Calls function to redirect to the preferred domain.
            isValidDomain.current = false; // Updates the ref to indicate invalid domain.
        } else if ((storedUrlCustom === true || storedUrlEnv === true)) {
            cookieWriter(storedEnv); // Calls function to set the cookie with the environment name.
            isValidDomain.current = true; // Updates the ref to indicate valid domain.
        } else {
            console.log("Error: Unexpected condition!"); // Logs an error message if the conditions are not met.
            isValidDomain.current = false; // Updates the ref to indicate invalid domain.
        }
     
        // Ensures the onComplete callback is called with the correct value.
        if (onComplete) {
            onComplete(isValidDomain.current); // Calls the onComplete callback with the current domain validity.
        }
        
    }, [onComplete, currentDomain]); // useEffect dependency array to avoid infinite loop.

    return null; // No UI component to render.
};

export default DomainRedirect; // Export the DomainRedirect component for use in other parts of the application.
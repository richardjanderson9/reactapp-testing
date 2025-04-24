// React Imports!
import { useEffect } from 'react';
// Custom Imports!
import { setCookie } from './cookieWriter';

const FingerprintChecks = () => {
    useEffect(() => {
        const loadFingerprint = async () => {
            try {
                const FP = await import('https://openfpcdn.io/fingerprintjs/v4');
                const fp = await FP.load();
                const result = await fp.get();
                
                // Use the centralized cookie writer
                setCookie('fingerprint', result.visitorId, {
                    secure: true,
                    maxAge: 30 // 30 days
                });
            } catch (e) {
                console.error("Fingerprint error:", e);
            }
        };
        loadFingerprint();
    }, []);

    return null; // No UI component to render.
};

export default FingerprintChecks;
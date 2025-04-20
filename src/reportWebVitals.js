import { logger } from './utils/logger';

/**
 * Reports Web Vitals performance metrics
 * @param {(metric: {id: string, name: string, value: number}) => void} onPerfEntry 
 */
const reportWebVitals = async (onPerfEntry) => {
  if (!(onPerfEntry && typeof onPerfEntry === 'function')) {
    logger.warn('reportWebVitals: onPerfEntry must be a function');
    return;
  }

  try {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    
    getCLS?.(onPerfEntry);
    getFID?.(onPerfEntry);
    getFCP?.(onPerfEntry);
    getLCP?.(onPerfEntry);
    getTTFB?.(onPerfEntry);
  } catch (error) {
    logger.error('Failed to load web-vitals:', error);
  }
};

export default reportWebVitals;

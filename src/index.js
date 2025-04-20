import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { logger } from './utils/logger';

// Check for root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  logger.error('Failed to find root element');
  throw new Error('Application failed to initialize');
}

// Create root with strict mode
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals with enhanced error handling
reportWebVitals(metric => {
  logger.perf(metric.name, metric.value);
  
  if (process.env.NODE_ENV === 'production') {
    try {
      const analyticsUrl = process.env.REACT_APP_ANALYTICS_URL;
      if (!analyticsUrl) {
        logger.warn('Analytics URL not configured');
        return;
      }
      
      const sent = navigator.sendBeacon(analyticsUrl, JSON.stringify(metric));
      if (!sent) {
        logger.warn('Failed to send metric via beacon');
      }
    } catch (error) {
      logger.error('Failed to send metrics:', error);
    }
  }
});

// Enable hot module replacement in development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

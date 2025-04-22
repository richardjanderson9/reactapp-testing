import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DomainRedirect from './components/js/url_checks';

// Create root directly with error handling
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <DomainRedirect />
    <App />
  </React.StrictMode>
);

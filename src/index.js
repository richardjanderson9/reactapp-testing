import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DomainRedirect from './components/js/urlChecks';

function DomainCheckWrapper() {
  const [domainValid, setDomainValid] = useState(null);

  return (
    <>
      {domainValid === null && (
        <DomainRedirect onComplete={(isValid) => setDomainValid(isValid)} />
      )}
      {domainValid !== null && <App />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DomainCheckWrapper />
  </React.StrictMode>
);

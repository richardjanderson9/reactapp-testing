import React, { useEffect, useState } from 'react';
import useConstant from 'use-constant';

const DomainRedirect = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const domains = useConstant(() => ({
    CORRECT: 'react.richardjanderson.uk',
    ALLOWED: ['localhost', '127.0.0.1', 'react.richardjanderson.uk']
  }));

  useEffect(() => {
    if (process.env.NODE_ENV === 'test' || domains.ALLOWED.includes(window.location.hostname)) return;

    setIsRedirecting(true);
    const url = new URL(window.location.href);
    window.location.replace(`https://${domains.CORRECT}${url.pathname}${url.search}${url.hash}`);
  }, [domains]);

  return isRedirecting && process.env.NODE_ENV !== 'test' ? (
    <div role="alert" aria-busy="true">Redirecting to secure domain...</div>
  ) : null;
};

export default DomainRedirect;
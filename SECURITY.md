# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.3.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

1. **Do Not** open public issues for security vulnerabilities
2. Email security concerns to: security@richardjanderson.uk
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

## Security Measures

- Domain validation and redirection
- HTTPS enforced with SameSite cookie policy
- Browser fingerprinting for identification
- Content Security Policy implemented
- Regular dependency updates
- Cloudflare protection
- Automated security scanning
- Environment-specific cookie handling

## Cookie Management

- Cookies marked with appropriate security flags
- Environment detection through cookie validation
- Separate handling for external vs. local cookies

## Development Practices

- Dependencies regularly audited (`npm audit`)
- Environment variables for sensitive data
- Input sanitization enforced
- Security headers implemented
- Linting to catch potential issues (`npm run lint`)

## Additional Resources

- [Security Headers](https://securityheaders.com/?q=react.richardjanderson.uk)
- [Cloudflare Security](https://www.cloudflare.com/security/)
- [FingerprintJS Documentation](https://fingerprintjs.com/docs/)
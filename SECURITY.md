# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
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

- HTTPS enforced
- Content Security Policy implemented
- Regular dependency updates
- Cloudflare protection
- Automated security scanning

## Development Practices

- Dependencies regularly audited (`npm audit`)
- Environment variables for sensitive data
- Input sanitization enforced
- Security headers implemented

## Commands

```bash
# Audit dependencies
npm audit

# Update dependencies
npm update

# Run security tests
npm run test:security
```

## Additional Resources

- [Security Headers](https://securityheaders.com/?q=react.richardjanderson.uk)
- [Cloudflare Security](https://www.cloudflare.com/security/)
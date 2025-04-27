# React Testing Application

A modern React application demonstrating domain validation, fingerprinting, and responsive design practices.

## Features

- Domain validation and redirection
- Browser fingerprinting via FingerprintJS
- Cookie management system
- Environment detection
- Progressive Web App support
- Performance monitoring
- Responsive design with dark mode support
- Background animations

## Tech Stack

- React 19.1.0
- React DOM 19.1.0
- FingerprintJS for browser identification
- Jest and React Testing Library for testing

## Domain Configuration

The application supports multiple environments:
- Production domains: richardjanderson.uk, rja-projects.site
- Staging domains: azurewebsites.net (automatically redirects)

## Project Structure

- `/src` - Application source code
  - `/components` - React components
    - `/js` - JavaScript components
      - `/dataprocessing` - Data handling utilities
    - `/json` - Configuration files
  - `/App.js` - Main application component
  - `/index.js` - Application entry point

## Continuous Integration

This project uses GitHub Actions for CI/CD with automatic deployment to Azure Static Web Apps.

## Development

### Editor Configuration
This project uses EditorConfig to maintain consistent coding styles. Please make sure your editor has EditorConfig support or install the appropriate plugin.

### Security
See [SECURITY.md](SECURITY.md) for security practices and vulnerability reporting.

## License

MIT
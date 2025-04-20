// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import 'jest-environment-jsdom';

// Configure Testing Library
configure({
  testIdAttribute: 'data-testid',
  // Throw errors for inaccessible elements
  throwSuggestions: true,
  // Add custom queries globally
  computedStyleSupportsPseudoElements: true
});

// Mock window.location for redirect tests
const mockLocation = new URL('http://localhost:3000');
delete window.location;
window.location = mockLocation;

// Mock matchMedia for responsive design tests
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }))
});

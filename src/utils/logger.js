const isDev = process.env.NODE_ENV === 'development';

/* eslint-disable no-console */
const logger = {
  log: (...args) => isDev && console.log(...args),
  warn: (...args) => isDev && console.warn(...args),
  error: (...args) => console.error(...args),
  perf: (name, value) => isDev && console.log(`Performance [${name}]: ${value}`)
};
/* eslint-enable no-console */

export { logger };
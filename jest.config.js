/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svg.js",
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
}

export default config

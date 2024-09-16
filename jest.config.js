/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const config = {
  rootDir: '.',
  clearMocks: true,
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    'src/constants': '<rootDir>/__mocks__/constantsMock.ts',
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        openReport: true,
      },
    ],
  ],
}

export default config

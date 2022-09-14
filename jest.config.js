module.exports = {
  testIgnorePatterns: ['/node_modules', '<rootDir>/src/componets'],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.js'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testEnvironment: 'jsdom'
};

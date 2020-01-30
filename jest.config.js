module.exports = {
  displayName: 'CspHtmlWebpackPlugin',
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/?(*.)jest.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  setupFilesAfterEnv: ['@undefinedlabs/scope-agent/jest/setupTests'],
  testRunner: '@undefinedlabs/scope-agent/jest/testRunner',
  runner: '@undefinedlabs/scope-agent/jest/runner'
};

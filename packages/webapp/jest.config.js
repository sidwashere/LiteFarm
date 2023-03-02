/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['/src/stories/', '/storybook.test.js'],
  transformIgnorePatterns: ['/node_modules/(?!(foo|bar)/)', '/bar/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};

module.exports = config;

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost:3000',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
};

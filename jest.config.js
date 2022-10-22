const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  verbose: true,
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@components/templates': '<rootDir>/src/components/templates',
    '@components': '<rootDir>/src/components',
  },
  collectCoverageFrom: [
    // Included
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    // Excluded
    '!src/**/*.d.ts',
    '!pages/_app.tsx',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.mocks.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}', // index files should only export other files
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

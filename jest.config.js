module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/ts/service/Cart.ts'],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    'src/ts/service/Cart.ts': { lines: 100, functions: 100, statements: 100, branches: 100 }
  }
};

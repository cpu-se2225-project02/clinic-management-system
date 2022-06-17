/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: { warnOnly: true },
    },
  },
  testEnvironment: 'jsdom',
  testTimeout: 30000,
  modulePaths: [
    '<rootDir>',
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
}
};

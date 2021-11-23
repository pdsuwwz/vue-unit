module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    __DEV__: true,
    __TEST__: true,
    __BROWSER__: true,
  },
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  coverageThreshold: {
    global: {
      "branches": 40,
      "functions": 80,
      "lines": 90,
      "statements": 80
    }
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testMatch: ['<rootDir>/__tests__/**/*.spec.js'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules'],
}

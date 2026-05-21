const { pathsToModuleNameMapper } = require('ts-jest')
const fs = require('fs')
const path = require('path')

const tsconfigString = fs.readFileSync(path.resolve(__dirname, './tsconfig.json'), 'utf8')
const tsconfig = JSON.parse(tsconfigString)

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    '^@faker-js/faker$': '<rootDir>/node_modules/@faker-js/faker/dist/index.js'
  },
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@faker-js/faker)'
  ],
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}
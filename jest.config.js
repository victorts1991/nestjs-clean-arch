const { pathsToModuleNameMapper } = require('ts-jest')
const fs = require('fs')
const path = require('path')

const tsconfigString = fs.readFileSync(path.resolve(__dirname, './tsconfig.json'), 'utf8')
const tsconfig = JSON.parse(tsconfigString)

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}
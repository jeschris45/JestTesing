const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.spec.json');
const { defaults: jestNgPreset } = require('jest-preset-angular/presets');



module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>'],
  testMatch: ['**/+(*.)+(jest).+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html','json-summary', 'text-summary', 'lcov'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest"
  },
  globals: {
    'ts-jest': {
      ...jestNgPreset.globals['ts-jest'],
      tsconfig: '<rootDir>/tsconfig.spec.json'
    }
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)|!(ngx-bootstrap)'],
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: [['jest-summarizing-reporter', {diffs: true}]],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-spec-reporter'),
      require('karma-trx-reporter'),
      require('karma-edge-launcher'),
      require('karma-firefox-launcher'),
      require('karma-ie-launcher'),
      require('karma-phantomjs-launcher'),
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['cobertura', 'html'],
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: true,
        global: { // thresholds for all files
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        },
        /* each: { // thresholds per file
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100,
          overrides: {
            'someFile.ts': {
              statements: 98
            }
          }
      } */
      }
    },
    angularCli: {
      environment: 'dev'
    },
    concurrency: Infinity,
    reporters: ['progress', 'spec', 'trx', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    browsers: [
      'Chrome',
    ],
    trxReporter: { outputFile: 'testresults/unit-test-results.trx', shortTestName: false }
  })
}

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const TfsReporter = require('jasmine-tfs-reporter');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var htmlScreenshotReporter = new HtmlScreenshotReporter({
  dest: 'testresults/screenshotReport',
  filename: 'testReport.html',
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true
});

var path = require('path');
var downloadsPath = path.join(__dirname, '/download');

exports.config = {
  // ---------------------------------------------------------------------------
  // ----- Test specific setup -------------------------------------------------
  // ---------------------------------------------------------------------------

  allScriptsTimeout: 30000,
  getPageTimeout: 15000,
  specs: [
    './e2e/**/*.spec.ts'
  ],
  suites: {
    user: './e2e/spec/UserProfile/**/*.spec.ts',
  },

  // following two lines can be passed as parameters in npm e2e script
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000',

  // ---------------------------------------------------------------------------
  // ----- Browser specific setup ----------------------------------------------
  // ---------------------------------------------------------------------------

  // seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.5.1.exe'],

  // 1. Use below capabilities if you e.g. need to run specific suite and don't need to use other browsers than Chrome 
  // running webdriver-managr is not needed in this configuration 

  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      prefs: {
        download: {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory': downloadsPath
        }
      }
    }
  },
  directConnect: true,

  // 2. multiCapabilities below enables running tests on Chrome and Firefox (other browsers are not configured yet)
  // NOTICE: before running tests with this configuration, run webdriver-manager
  // 'focus' on describe (fdescribe) is not recognized correctly and all the tests are running instead of specific suite

/*   multiCapabilities: [{
    browserName: 'chrome',
    'chromeOptions': {
      prefs: {
        download: {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory': downloadsPath
        }
      }
    },
    logName: 'Chrome',
    // chromeOptions: {
    //   'args': ['headless', '--disable-gpu']
    // },
    directConnect: false,
    maxInstances: 1,
    shardTestFiles: true
    }, 
    {
      browserName: 'firefox',
      logName: 'FireFox',
      directConnect: false,
      maxInstances: 2,
      shardTestFiles: true
    // }, 
    // {
    //   'browserName': 'edge'
    // },
    // {
    // 'browserName': 'internet explorer',
    // 'version': '11'
    // },
    // {
    // 'browserName': 'safari'
  }], */

  maxSessions: 1,
  // ---------------------------------------------------------------------------
  // ----- Test framework specific setup ---------------------------------------
  // ---------------------------------------------------------------------------
  framework: 'jasmine',
  noGlobals: false,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },

  // ---------------------------------------------------------------------------
  // ----- callbacks specific setup --------------------------------------------
  // ---------------------------------------------------------------------------
  beforeLaunch() {
    return new Promise(function (resolve) {
      htmlScreenshotReporter.beforeLaunch(resolve);
    })
  },

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    jasmine.getEnv().addReporter(new TfsReporter({
      'outputFile': 'e2e-test-results.xml'
    }));
    jasmine.getEnv().addReporter(htmlScreenshotReporter);
  },

  afterLaunch(exitCode) {
    return new Promise(function (resolve) {
      htmlScreenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  params: {
    appUrl: 'http://someUrl.com'
  },
  SELENIUM_PROMISE_MANAGER: false
};

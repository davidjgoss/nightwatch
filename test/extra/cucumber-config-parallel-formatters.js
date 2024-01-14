const path = require('path');

module.exports = {
  selenium: {
    port: 10191,
    host: 'localhost'
  },

  persist_globals: true,
  output_folder: false,

  webdriver: {
    start_process: false
  },

  globals: {
    test_calls: 0,
    waitForConditionTimeout: 20,
    retryAssertionTimeout: 20,
    waitForConditionPollInterval: 10
  },

  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: path.join(__dirname, '../cucumber-integration-tests/sample_cucumber_tests/parallel-formatters/sample.feature'),
      integrationStrategy: process.env.CUCUMBER_INTEGRATION_STRATEGY
    }
  },
  output: false,
  silent: false
};

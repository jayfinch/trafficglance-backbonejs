module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'requirejs',
      'mocha',
      'sinon-chai'
    ],
    files: [
      'src/scripts/main.js',
      {pattern: 'src/**/*.js*', included: false},
      {pattern: 'test/**/*.js*', included: false}
    ],
    reporters: [
      'progress',
      'coverage'
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS',
      'Chrome',
      'Safari',
      'Firefox'
    ],
    captureTimeout: 60000,
    singleRun: false
  });
};
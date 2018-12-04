// Karma configuration
// Generated on Sat Sep 01 2018 00:19:03 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-coverage-istanbul-reporter"),
      require("karma-webpack"),
      require("karma-nyan-reporter")
    ],
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    // list of files / patterns to load in the browser
    files: ["./test.ts"],
    // list of files to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./test.ts": ["webpack", "sourcemap"]
    },
    webpack: {
      mode: "development",
      devtool: 'inline-source-map',
      resolve: {
        extensions: [".ts", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  configFile: './tsconfig.json'
                }
              }
            ]
          },
          {
            enforce: 'post',
            test: /\.ts$/,
            loader: 'istanbul-instrumenter-loader'
          }
        ]
      }
    },
    coverageIstanbulReporter: {
      reports: ['html']
    },
    webpackMiddleware: {
      logLevel: 'silent'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["nyan", "coverage-istanbul"],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["ChromeHeadless"],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          ' --no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};

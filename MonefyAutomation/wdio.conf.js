const { addAttachment } = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '16',
        'appium:appPackage': 'com.monefy.app.lite',
        'appium:appActivity': 'com.monefy.activities.main.MainActivity_',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        timeout: 60000,
        before: function () {},
        after: function () {},
        afterStep: async function (test, context, { error, result, duration, passed, retries }) {
            const screenshot = await browser.takeScreenshot();
            addAttachment('Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
        },
    },
};

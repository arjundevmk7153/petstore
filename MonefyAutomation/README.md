# MonefyAutomation

Automated end-to-end testing for the Monefy Android app using WebdriverIO, Appium, and Cucumber with Allure reporting.

## Prerequisites

- **Node.js** (v16 or later recommended)
- **npm** (comes with Node.js)
- **Java JDK** (for Appium/Android)
- **Android SDK** (ensure `ANDROID_HOME` or `ANDROID_SDK_ROOT` is set)
- **Appium** (installed via npm)
- **Android Emulator** or real device
- **Allure Commandline** (for HTML reports)

## Setup

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd MonefyAutomation
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install Appium globally (if not already):**
   ```sh
   npm install -g appium
   ```

4. **Install Allure commandline (if not already):**
   ```sh
   npm install -g allure-commandline
   ```

5. **Set up Android environment variables:**
   ```sh
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
   *(Add these lines to your `~/.zshrc` or `~/.bash_profile` for persistence)*

6. **Start your Android emulator or connect a real device.**

7. **Place the Monefy split APKs in the `monify/` folder.**

## Running the Tests


1. **Start the Appium server:**
   ```sh
   npx appium
   ```
   *(Leave this terminal open)*

2. **Run the tests:**
   In a new terminal (in the project root):
   ```sh
   npm test
   ```

## Viewing the Allure Report

1. **Install Allure commandline (if not already):**
   ```sh
   npm install -g allure-commandline
   ```

2. **Serve the Allure report (view in browser):**
   ```sh
   allure serve allure-results
   ```
   This will automatically generate the report and open it in your default browser.

## Project Structure

- `features/` - Cucumber feature files and step definitions
- `wdio.conf.js` - WebdriverIO and Appium configuration
- `monify/` - Folder for split APK files
- `allure-results/` - Raw test results (generated after test run)
- `allure-report/` - HTML report (generated after running Allure)

## Notes
- If you encounter issues, check that your emulator/device is running and accessible via `adb devices`.
---

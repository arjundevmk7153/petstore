# Test Automation Script for Pet Store API
##  Description

This repository provides a backend test automation framework tailored for a **Pet Store API**. Built with **Cucumber**, **TypeScript**, and integrated with **HTML Reporting**, this framework supports seamless test execution both locally and within Docker containers. It emphasizes scalability, environment configuration, and ease of execution across different systems.

---

##  Key Features

- **Cucumber with TypeScript**: Follows BDD practices using Cucumber with TypeScript, ensuring clarity in test scenarios and maintainable test logic.
- **Makefile Automation**: Simplifies execution commands into make targets for clean, repeatable workflows.
- **Environment-based Configuration**: Uses a `.env.local` file for environment configuration.
- **Docker Support**: Supports containerized execution for consistent environments, ideal for CI/CD pipelines.
- **HTML Reports**: Generates beautiful and comprehensive reports post-test execution.
- **Pre-built Report**: A sample report is committed (`reports/report.html`) for your reference and hence not added to gitignore.❗❗❗

---

##  Prerequisites

Ensure the following tools are installed:

- [Docker](https://www.docker.com/)
- [Make](https://www.gnu.org/software/make/)
- [Node.js & npm](https://nodejs.org/) *(Optional if running inside Docker)*

---
##  Installation & Execution

Follow these steps to set up and run the tests:

### 1.  Clone the Repository
```sh
git clone <your-pet-store-api-repo-url>
cd pet
```
### 2.  Setup Environment File
Create a `.env.local` file with appropriate configurations:
```sh
.env.local → contains valid API/test URLs
```

### 3.  Install Dependencies
```sh
make install
```

### 4.  Run Tests (Local Machine execution)

 Run on Local
```sh
make test-local
```
❗❗Tests will fail unless `.env.local` contains valid API endpoints.

### Reports

Reports are generated after test execution in ./reports/report.html

### 5. Docker Execution (Recommended - can skip step 4)
It’s highly recommended to run the tests inside Docker containers for consistency and isolation:

🔧 Make sure the Docker daemon is running before executing any Docker-related commands. Without it, containers won’t be able to build or run.

 Run in Docker (Local)
```sh
make pet-test-local REPORT_PORT=8081
```
❗❗As mentioned, the local environment will result in failed tests unless properly configured.

### 6.  View the HTML Report
Once tests are executed, open the report in your browser:

http://127.0.0.1:8081/report.html

####  When the date of birth field is left empty (""), the system amusingly defaults to the current date—essentially creating an account for a newborn with instant banking access. A dedicated test case has been added for this scenario, and the failure can be reviewed in the generated test report.
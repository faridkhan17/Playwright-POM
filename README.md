# 1Global

## Better Roaming Test Automation
This project contains automated tests for the Better Roaming website using Playwright and the Page Object Model (POM) pattern.

## Prerequisites
Node.js (v14 or later) and npm (Node Package Manager) installed. You can download Node.js from nodejs.org.

## Installation
### Clone the repository:
git clone https://github.com/yourusername/better-roaming-test-automation.git
### Install dependencies:
```npm install```

## Configuration
The Playwright configuration can be customized in the playwright.config.js file. By default, it runs in a non-headless mode and sets a viewport size of 1280x720 pixels. You can adjust these settings as needed.

## Running Tests
To run the tests, use the following command:
```npx playwright test```

This will execute all tests defined in the tests/ directory using the Playwright test runner.

## Test Details
Test File: tests/betterRoamingTest.spec.js
## Page Objects:
pages/homePage.js - Handles interactions on the home page.
pages/planPage.js - Handles verification of plan details.

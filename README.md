# Playwright URL DEMO Automation Framework

## Project Overview
This project demonstrates end-to-end UI automation testing using Playwright with TypeScript.

Application Under Test:
https://www.saucedemo.com/

## Technology Stack
- Playwright
- TypeScript
- Node.js
- HTML Reporting

## Setup & Installation
- Node.js
- Playwright

## Test Scenarios Covered
- Valid Login Test
- Invalid Login Test
- Screenshot Capture
- Cross Browser Testing (Chromium, Firefox)

##  Project Structure

```
playwright-automation/
│
├─ tests/
│  ├─ login.spec.ts
│
├─ playwright.config.ts
├─ package.json
├─ invalid-login.png
└─ inventory-page.png
```

## How To Run The Project

Install dependencies:

npm install


## Run all tests:
npx playwright test


## Run Test case in specific browser:
npx playwright test --project=chromium or firefox or edge

## View HTML Test Report:
npx playwright show-report

## Reporting
Playwright HTML report is generated automatically after execution.

## Author
Sonal  
QA Automation Engineer
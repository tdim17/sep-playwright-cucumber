# SEP Automation Framework

The Self Enrollment Portal System is designed to facilitate a secure and efficient checkout experience for customers purchasing products or services online. This system encompasses features such as product selection, personal details entry, payment plan selection, terms and conditions agreement, and payment processing.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Framework Structure and Usage](#framework-structure-and-usage)
4. [Project and Git Workflow](#project-and-git-workflow)

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v18 or higher)
- npm (v6 or higher), which comes with Node.js
- Visual Studio Code
- Git
- Playwright Test
- cucumber (v10 or higher)
- cucumber-html-reporter (v7 or higher)

To install necessary libraries, open your terminal and run:
```sh
npm install @playwright/test @cucumber/cucumber cucumber-html-reporter
```

## Environment Setup

### 1. Clone the Repository
```sh
git clone https://github.com/<your-username>/sep-playwright-cucumber.git
```

### 2. Open the Folder in VS Code
2.1 Open the VS Code App  
2.2 Go to `File` and click `Open Folder`  
2.3 Select the cloned `sep-playwright-cucumber` folder

### 3. Install Dependencies
```sh
npm install
```

### 4. Install VS Code Extensions
Install the following extensions for a better development experience:
- Better Comments
- Cucumber (Gherkin) Full Support
- Material Icon Theme
- NPM
- npm Intellisense
- NPM Run
- Playwright Snippets
- Tabnine

### 5. Add Environment Variables

Copy `.env.example` to `.env` and fill in the real values:
```sh
cp .env.example .env
```

Open VS Code user settings (`Ctrl+Shift+P` → `Open User Settings JSON`) and add the following environment variables:

```json
"terminal.integrated.env.windows": {
  "SEP_USERNAME": "<basic-auth-username>",
  "SEP_PASSWORD": "<basic-auth-password>",
  "CARD_NUMBER": "<test-card-number>",
  "EXPIRATION_DATE": "<test-card-expiration-date>",
  "CVC": "<test-card-cvc>",
  "ZIP_CODE": "<test-card-zip-code>"
}
```

> For test card details see: [Stripe Testing Documentation](https://docs.stripe.com/testing)

### 6. Run the `test:tag` Script
Go to the `package.json` file and run the `test:tag` script to verify the setup.

## Framework Structure and Usage

### 1. The `features` Folder
This folder is used for storing the feature files. Each feature file has a unique tag name which can be used to run a specific feature via the `package.json` scripts.

### 2. The `hooks` Folder
This folder contains the `globalHooks.js` for Cucumber step definitions. It manages browser lifecycle (init and close) for each scenario and handles failure screenshots.

### 3. The `pages` Folder
This folder stores web element locators and page actions.  
`BasePage` must be the parent class of all page classes.  
Every page class must be added and initialized in `globalPagesSetup.js`.

### 4. The `steps` Folder
This folder stores step definitions for the feature files.  
Step file names should match their corresponding feature file names.

### 5. `cucumber.cjs` File
A CommonJS configuration file for CucumberJS, managing paths for step definitions, support files, plugins, and output formatting options.

### 6. `package.json` File
Defines project metadata and scripts for running tests and opening reports:
- `test` — runs all Cucumber scenarios
- `test:tag` — runs a specific tag (edit the tag in `package.json`)
- `test:smoke` — runs smoke-tagged scenarios
- `Mac-open:report` / `Windows-open:report` — opens the HTML report

## Project and Git Workflow

### 1. Create a `develop` Branch
Create a branch named `develop` in your GitHub repository.

### 2. Create Feature Branches
Create separate branches for each feature from the `develop` branch.  
Naming convention: `feature/tagname_feature_name`  
Example: for `@sep01` tag → `feature/sep01-login`

### 3. Update the Project
```sh
git fetch
git pull
```

### 4. Checkout the Specific Feature Branch
```sh
git checkout feature/branch_name
```
Double-check the active branch in the bottom-left corner of VS Code.

### 5. Work on the Feature File
Implement the feature file for the branch you checked out.

### 6. Commit and Push Changes
```sh
git add .
git commit -m "Descriptive commit message"
git push
```

### 7. Create a Pull Request
Create a pull request from your feature branch to the `develop` branch.

### 8. Repeat
Repeat from step 2 until all user stories are complete.

# Cypress Tests

Project that will hold the End-To-End tests for the Liverpool CMS website.

## Getting started

- Make a copy of the `example.cypress.env.json` file and rename it to `cypress.env.json` (This is untracked by version control and will only be used in your local environment).
- Install dependencies

```bash
pnpm install
```

## Automation estructure

- This project follows a modular test structure with the following hierarchy for organizing features and step definitions:

```
digital_frontend_codebase/
│
└─── packages/
     └─── cypress-tests/
          └─── cypress/
               └─── e2e/
                    ├─── steps/
                    │    └─── footer/
                    │         └─── footer.cy.ts
                    └─── feature/
                         └─── footer/
                              └─── footer.feature
```

- Steps folder (/steps/): Contains the step definition files written in TypeScript (\*.cy.ts) for each corresponding feature.
- Feature folder (/feature/): Contains the Gherkin feature files (\*.feature) that describe the behavior of the application.

## Testing on different devices

Use scripts that encode both the site and the device. Each command follows the pattern `test:<site>:<device>` or `open:<site>:<device>`.

```bash
# Headless example for checkout on desktop
npm run test:checkout:desktop

# Open the Cypress GUI for Home Unificado on an iPhone 11 viewport
npm run open:home_unificado:iphone11
```

Available sites: `home_unificado`, `blpcdpplp`, `blankpage`, `checkout`.
Available devices: `desktop`, `iphone11`, `samsungA54`.

## Validating Device Type During Tests

You can validate whether the current test is running on a mobile or desktop device by using the `isMobile` Cypress environment variable. This variable returns `true` if the test is running on a mobile device and `false` if it is running on a desktop.

Example:

```
if (Cypress.env('isMobile')) {
  // Mobile-specific test logic
  cy.get('.mobile-element').should('be.visible');
} else {
  // Desktop-specific test logic
  cy.get('.desktop-element').should('be.visible');
}
```

## Running the tests

There are two ways to run them, with the GUI or in headless mode. Headless mode is faster and it's commonly used in CI/CD pipelines, while the GUI is good for local development to see exactly what it's happening on the browser.

In this project, we have setup shortcuts to running them in either mode:

```bash
pnpm test # To use headless mode
# or
pnpm open # To use the Cypress GUI
```
## ### `example.cypress.env.json` File

#### What is it for?
It’s a template that defines the environment variables required to run Cypress tests (e.g., URLs, credentials, API keys).

#### Why not delete it?
1. **Configuration guide**: Helps new developers understand what variables are needed.
2. **Security**: Prevents exposing sensitive data, as real values go in `cypress.env.json` (ignored by Git).
3. **Maintenance**: Makes managing environment variables easier.

#### How to use it?
1. Copy `example.cypress.env.json` and rename it to `cypress.env.json`.
2. Fill in the values with your environment details.
3. **Do not commit it to the repository**.

Example:
```json
{
  "BASE_URL": "https://example.com",
  "API_KEY": "your_api_key_here"
}
```

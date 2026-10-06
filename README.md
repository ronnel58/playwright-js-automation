# Playwright E-Commerce Test Automation

Automated end-to-end testing framework built using
Playwright and JavaScript.

## Technologies

- Playwright
- JavaScript
- Node.js
- Git
- GitHub Actions

## Testing Types

- Functional Testing
- Regression Testing
- Smoke Testing
- Negative Testing
- End-to-End Testing
- Cross-Browser Testing

## Test Scenarios

### Authentication

- Successful login
- Invalid password
- Missing username
- Missing password
- Locked user

### Products

- Product list validation
- Add product to cart
- Remove product from cart

### Cart

- Validate cart items
- Validate quantity
- Remove items

### Checkout

- Successful checkout
- Required field validation
- Order summary validation

## Framework Structure

tests/
pages/
data/
fixtures/
utils/

## Install

npm install

npx playwright install

## Run Tests

npm test

## Run Chromium

npm run test:chromium

## Run Smoke Tests

npm run test:smoke

## View Report

npm run report

## CI/CD

GitHub Actions automatically executes Playwright
tests on pushes and pull requests to the main branch.

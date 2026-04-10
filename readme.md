# Playwright Automation Project

This project demonstrates automated end-to-end testing of a login flow using Playwright.

## 🚀 Tech Stack

* Playwright
* TypeScript
* Node.js

## 🧪 Test Scenarios

The following test cases are covered:

* ✅ Successful login (standard user)
* ❌ Invalid username
* ❌ Invalid password
* 🔒 Locked out user

## 📂 Project Structure

```
playwright-automation-tests/
├── tests/
│   ├── login.spec.ts
│   ├── login-invalid-user.spec.ts
│   ├── login-invalid-password.spec.ts
│   ├── login-locked-user.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## ▶️ How to Run Tests

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Open HTML report:

```bash
npx playwright show-report
```

## 📊 What This Project Demonstrates

* UI automation using Playwright
* Positive and negative test scenarios
* Basic test structure for maintainable automation
* Real user interaction simulation (form input, clicks, validation)

## 💼 Author

Esteban Nicolucci


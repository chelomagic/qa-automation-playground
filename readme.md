# 🧪 QA Automation Playground

A QA Automation portfolio built with **Playwright + TypeScript**, focused on real-world testing scenarios, clean end-to-end flows, and scalable automation design using the **Page Object Model (POM)**.

---

## 🚀 Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* GitHub Actions (CI)
* Playwright HTML Reports

---

## 📁 Repository Structure

```
qa-automation-playground/
├── mercado-libre-playwright/   # Real-world testing (CI challenges)
├── saucedemo-playwright/       # Stable E2E automation
└── .github/workflows/          # CI pipelines
```

---

## 🛒 Project 1 — MercadoLibre (Real-world testing)

Automation of search, filters, and product navigation on a live e-commerce site.

### 🔍 What this demonstrates

* Testing against real external systems
* Handling flaky behavior
* Debugging CI vs local differences
* Understanding test instability causes

### ⚠️ Key Challenge

GitHub Actions runs from datacenter IPs → MercadoLibre may:

* block requests
* show CAPTCHA
* return different DOM

### 🧠 Key Insight

> Tests that depend on external systems may behave differently in CI than locally.

### 🛠️ Strategy applied

* Debugging CI responses
* Identifying environment differences
* Conditional execution (`process.env.CI`)

### ✅ Strategy implemented
* Mock-based testing with `page.route()` for CI compatibility
* Tests run reliably in GitHub Actions without depending on external systems
* Conditional execution (`process.env.CI`) for local vs CI environments

---

## 🧪 Project 2 — SauceDemo (Stable E2E flow)

A clean and reliable automation project built to demonstrate best practices.

### 🔄 Flow Covered

Login → Add product → Cart → Checkout → Order success

### ✅ What this validates

* Functional login
* Product interaction
* Cart state management
* Full checkout flow
* Successful order confirmation

### 🧱 Architecture

* Page Object Model (POM)
* Separation of test logic and UI selectors
* Reusable page classes

---

## 🧠 Skills Demonstrated

* ✔ Page Object Model (POM)
* ✔ UI Assertions (`toBeVisible`, `toHaveText`, `toHaveURL`)
* ✔ End-to-end testing
* ✔ State validation (not just UI clicks)
* ✔ CI debugging (local vs GitHub Actions)
* ✔ Test reliability awareness

---

## ⚙️ How to Run

### ▶️ MercadoLibre project

```bash
cd mercado-libre-playwright
npm install
npx playwright install
npx playwright test --headed
```

### ▶️ SauceDemo project

```bash
cd saucedemo-playwright
npm install
npx playwright install
npx playwright test --headed
```

---

## 🔄 CI (GitHub Actions)
* Automated test execution on every push
* Mock-based tests run reliably without external dependencies
* Playwright HTML reports uploaded as artifacts
* All workflows currently passing ✅

---

## 👨‍💻 About Me

QA Analyst with 6+ years of experience in manual testing (Stride / Open English), practicing to become better at QA Automation**.
* Tools: Playwright, Postman, Jira
* Focus: Reliable, maintainable automation
* Currently learning: API testing + CI pipelines

---

## 💬 Final Note

This repository showcases two key realities of QA Automation:

* 🌍 **Real-world instability** (MercadoLibre)
* 🧪 **Controlled reliable testing** (SauceDemo)

Understanding the difference between both is essential in real QA work.

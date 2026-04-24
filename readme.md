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
* Negative cases: invalid credentials and locked out users

### 🧱 Architecture
* Page Object Model (POM)
* Separation of test logic and UI selectors
* Reusable page classes

---

## 🔌 Project 3 — API Testing (REST)
Automated API tests against JSONPlaceholder using Playwright's request context — no browser needed.

### 🔍 What this covers
* GET — fetch a single user and validate response data
* GET — fetch a list and validate count
* POST — create a resource and validate response
* PUT — update an existing resource
* DELETE — remove a resource

### ✅ What this demonstrates
* Full CRUD coverage via HTTP methods
* Status code validation (200, 201)
* Response body assertions
* API testing without UI dependencies
* Fast execution — no browser overhead

---

## 🧠 Skills Demonstrated
* ✔ Page Object Model (POM)
* ✔ UI Assertions (`toBeVisible`, `toHaveText`, `toHaveURL`)
* ✔ End-to-end testing
* ✔ REST API testing (GET, POST, PUT, DELETE)
* ✔ Mock-based testing with `page.route()`
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

### ▶️ API Testing project
```bash
cd api-testing
npm install
npx playwright install
npx playwright test
```

---

## 🔄 CI (GitHub Actions)
* Automated test execution on every push
* Mock-based tests run reliably without external dependencies
* Playwright HTML reports uploaded as artifacts
* All workflows currently passing ✅

---

## 👨‍💻 About Me
QA Engineer with 6+ years of experience across large-scale web platforms and SaaS tools.
* Automation: Playwright, TypeScript, Python
* Tools: Postman, Jira, GitHub Actions
* Focus: Reliable, maintainable automation with real CI/CD integration

---

## 💬 Final Note
This repository showcases three key areas of QA Automation:
* 🌍 **Real-world instability** (MercadoLibre)
* 🧪 **Controlled reliable testing** (SauceDemo)
* 🔌 **API testing without UI dependencies** (REST API)


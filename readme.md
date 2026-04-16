# 🧪 Mercado Libre Playwright Automation

This is a QA automation practice project using Playwright + TypeScript, focused on testing real user flows on Mercado Libre.

---

## 🚀 What this project covers

* 🔍 Product search validation
* 🧰 Filter behavior
* 📦 Product page navigation
* 🧱 Page Object Model (POM) structure
* ⚙️ GitHub Actions CI setup
* 🧠 Real-world debugging (CI vs local differences)

---

## 🛠️ Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions.

---

## 📁 Project Structure

```
mercado-libre-playwright/
├── pages/
│   ├── HomePage.ts
│   ├── ResultsPage.ts
│   └── ProductPage.ts
├── tests/
│   ├── search.spec.ts
│   ├── filter.spec.ts
│   └── product.spec.ts
├── playwright.config.ts (optional)
├── package.json
```

---

## ▶️ Run Locally

```bash
npm install
npx playwright install
npx playwright test --headed
```

---

## ⚠️ CI Behavior (Important)

When running in **GitHub Actions**, Mercado Libre may return an error page instead of the actual content.

This happens because:

* GitHub Actions uses **datacenter IPs (Azure)**
* Mercado Libre detects this traffic as automated/bot-like
* The site responds with a **blocked/error page**

Example of what appears in CI instead of real results:

> "Hubo un error accediendo a esta pagina..."

Because of this, selectors like:

```
ol.ui-search-layout > li
```

do not exist in CI, causing test failures.

---

## ✅ Solution Applied

To avoid **false negatives in CI**, tests that depend on the real Mercado Libre site are skipped when running in CI:

```ts
test.skip(!!process.env.CI, 'Mercado Libre blocks datacenter IPs in CI');
```

This ensures:

* ✔ Reliable pipeline (no random failures)
* ✔ Tests still run correctly in local environments
* ✔ Real-world behavior is documented

---



## 🧠 What I learned

- CI can behave very differently from local environments  
- Some websites block datacenter IPs (like GitHub Actions)  
- Not all E2E tests are suitable for CI without adjustments  
- Debugging CI issues often requires inspecting the actual HTML returned  

---

## 🔮 Possible Improvements

* Mock network responses using `page.route()` to fully decouple tests from Mercado Libre
* Use a self-hosted runner to bypass IP blocking
* Add a secondary demo project (CI-safe) for full pipeline validation

---

## 📌 Notes

This project is intended as a **learning and portfolio exercise**, focusing on:

* Real-world debugging
* Automation structure
* Handling unstable external dependencies

---

## 💡 Author

Esteban Nicolucci
QA

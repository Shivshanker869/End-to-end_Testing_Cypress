# 🧪 End-to-End_Testing_Cypress

This project is a complete **End-to-End Test Automation Framework** built using **Cypress** for the [SauceDemo](https://www.saucedemo.com/) e-commerce web application.  
It validates critical workflows like **login, product selection, cart management, checkout, and order completion**, developed using the **Page Object Model (POM)** for scalable and maintainable test automation.

---

## 🚀 Project Overview

- 🧰 **Tool Used:** Cypress  
- 💻 **Language:** JavaScript  
- 🧱 **Framework Type:** Page Object Model (POM)  
- 🧪 **Testing Types:** Functional, UI, End-to-End Testing  
- 📊 **Reports:** Cypress Dashboard / HTML Screenshots  
- 📦 **Automation Goal:** Build a robust, reusable, and fast UI test framework  

---

## 🧩 Key Features

✅ End-to-End test coverage of entire SauceDemo user journey  
✅ Clean and scalable **Page Object Model (POM)** architecture  
✅ Reusable selectors, custom utilities, and Cypress commands  
✅ Validations using Cypress assertions for accuracy  
✅ Data-driven execution using Fixtures  
✅ Supports **headless and headed** browser execution  
✅ Auto-generated logs, screenshots, and video recordings  

---

## 📁 Folder Structure
```
End-to-end_Testing_Cypress/
│
├── cypress/
│   │
│   ├── e2e/                          # Test Scripts (End-to-End Scenarios)
│   │   ├── firsttest.cy.js
│   │   ├── testSaucelabs.cy.js
│   │   └── .gitignore
│   │
│   ├── fixtures/                     # Test Data (credentials, inputs, JSON files)
│   │
│   ├── support/
│   │   ├── commands.js               # Custom Cypress Commands
│   │   └── e2e.js                    # Test behavior, hooks, configurations
│   │
│   └── pages/                        # Page Object Model (POM) Classes
│       ├── login.js                  # Login Page Elements & Methods
│       ├── product.js                # Product Page Elements & Methods
│       ├── cart.js                   # Cart Page Locators & Functions
│       ├── checkoutOne.js            # Step 1 Checkout Page
│       ├── checkoutTwo.js            # Step 2 Checkout Page
│       └── order.js                  # Order Confirmation / Summary Page
│
├── node_modules/                     # Installed Dependencies
│
├── cypress.config.js                 # Cypress Configuration File
├── package.json                      # Project Dependencies & Scripts
├── package-lock.json                 # Auto-generated NPM Lock File
└── README.md                         # Project Documentation
```

---

## 🧪 Modules Automated

| Module | Description |
|---------|-------------|
| **Login** | Validates standard_user login & error validation for locked_out_user. |
| **Product Listing** | Verifies product sorting, item visibility, and detail pages. |
| **Add to Cart** | Adds/removes items, validates cart badge and item count. |
| **Checkout** | Tests shipping info, order summary, and price validations. |
| **Order Completion** | Verifies successful checkout and thank-you confirmation. |

---

## 🛠️ How to Run Tests

### 🔧 Install Dependencies


---

## 🧠 Key Learnings

- Strong understanding of **Cypress E2E automation workflow**  
- Designed maintainable test suites using **POM architecture**  
- Implemented reusable **custom commands & utilities**  
- Experience with Cypress synchronization, assertions, and reporting  
- Developed complete **end-to-end automation** for e-commerce website  

---

## 🏁 Conclusion

The **End-to-End_Testing_Cypress** project delivers a fully structured, scalable, and efficient automation framework for testing SauceDemo.  
It showcases clean architecture, reusable components, and fast UI test execution suitable for enterprise-level automation.

---

## 👤 Author

**Shiv Shanker Gupta**  
💼 *QA Engineer | Manual & Automation Tester (Cypress | Selenium | JavaScript)*  
📧 **gopalgupta9639@gmail.com**

---

## 🌐 GitHub Profile

🔗 [**Visit My GitHub**](https://github.com/Shivshanker869)

---

## ⭐ Show Your Support

If this project helped you or inspired your automation journey, give it a ⭐ **Star** on GitHub!

---

# 🌲 Cypress E2E Testing Project

A complete end-to-end testing project for a **Todo application**, built using [Cypress](https://www.cypress.io/). This project simulates a real QA workflow covering UI automation, API interactions, and CI/CD execution via GitHub Actions.

---

## 🧪 What Was Tested

| Test File | Description |
|-----------|-------------|
| `todo.cy.js` | Adding a todo task and marking it as completed |
| `user.cy.js` | User login functionality |

---

## ✅ Skills Practiced

- End-to-end UI testing with Cypress
- Page Object Model (POM) design pattern
- API interactions within tests (register, add todo)
- Cookie and token handling
- Dynamic test data generation with Faker.js
- GitHub Actions CI/CD pipeline
- Cross-environment test execution (local, staging)

---

## 🏗️ Project Structure

```
cypress/
├── api/
│   ├── userApi.js        # User registration API calls
│   └── todoApi.js        # Todo CRUD API calls
├── e2e/
│   ├── todo.cy.js        # Todo test cases
│   └── user.cy.js        # User test cases
└── pages/
    ├── loginPage.js      # Login page object
    ├── todoPage.js       # Todo page object
    └── newTodoPage.js    # New todo page object
cypress.config.js         # Cypress environment configuration
package.json              # Project dependencies and scripts
.github/
└── workflows/
    └── cypress.yml       # GitHub Actions CI/CD pipeline
```

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| [Cypress](https://www.cypress.io/) | E2E testing framework |
| [Faker.js](https://fakerjs.dev/) | Dynamic test data generation |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/antoniosgerges94/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Run tests headlessly on staging
npm run test:staging

# Open Cypress interactive UI
npx cypress open
```

---

## ⚙️ Environments

| Script | Base URL |
|--------|----------|
| `npm run test:staging` | `https://qacart-todo.herokuapp.com` |

> Scripts are defined in `package.json` and map to environment-specific Cypress configs.

**Example `package.json` scripts:**

```json
"scripts": {
  "test:staging": "cypress run --env environment=staging",
  "cy:open": "cypress open"
}
```

---

## 🎯 Goal

To simulate a real QA E2E testing workflow and strengthen practical skills in Cypress-based UI automation, API testing, and CI/CD integration.

---

## 👤 Author

**Antonios Gerges Hakim Eskandar**  
Software QA/QC Engineer

[![Email](https://img.shields.io/badge/Email-antoniosgerges94%40gmail.com-blue?logo=gmail)](mailto:antoniosgerges94@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-antonios--eskandar-blue?logo=linkedin)](https://linkedin.com/in/antonios-eskandar)
[![GitHub](https://img.shields.io/badge/GitHub-antoniosgerges94-black?logo=github)](https://github.com/antoniosgerges94)

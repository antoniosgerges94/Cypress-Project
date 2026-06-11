# 🌲 Cypress E2E Testing Project

A complete end-to-end testing project for a Todo application, built using Cypress.
This project simulates a real QA workflow covering UI automation, API interactions, and CI/CD execution via GitHub Actions.

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

---

## 🛠️ Tools Used

- **Cypress** — E2E testing framework
- **Faker.js** — Dynamic test data generation
- **GitHub Actions** — CI/CD pipeline

---

## 🚀 How to Run Locally

```bash
# Install dependencies
npm install

# Run tests on staging
npm run test:staging

# Open Cypress UI
npx cypress open
```

---

## ⚙️ Environments

| Script | Environment |
|--------|-------------|
| `npm run test:staging` | https://qacart-todo.herokuapp.com |

---

## 🎯 Goal

To simulate a real QA E2E testing workflow and strengthen practical skills in
Cypress-based UI automation, API testing, and CI/CD integration.

---

## 👤 Author

**Antonios Gerges Hakim Eskandar**  
Software QA/QC Engineer  
📧 antoniosgerges94@gmail.com  
🔗 [linkedin.com/in/antonios-eskandar](https://linkedin.com/in/antonios-eskandar)  
🐙 [github.com/antoniosgerges94](https://github.com/antoniosgerges94)

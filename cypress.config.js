
// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5g4cok',
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://qacart-todo.herokuapp.com/',
    viewportWidth: 360,
    viewportHeight: 760,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      config.env.email = process.env.EMAIL ?? 'test@example.com';
      config.env.password = process.env.PASSWORD ?? 'Test1234';
      return config;
    },
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter', //for html reporter
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html reporter
    },
    specPattern: "cypress/e2e/APITesting/**/*.cy.js", //for rin api folder inside e2e folder
  },
});

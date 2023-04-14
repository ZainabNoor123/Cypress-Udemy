import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'tyvsy4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      demoVar: "Hello from the Cypress.config.ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com/",
    },
   baseUrl: "http://uitestingplayground.com"
  },
  pageLoadTimeout: 6000,
  viewportHeight: 1000,
  viewportWidth: 1400,
});

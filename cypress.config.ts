import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'tyvsy4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   baseUrl: "http://uitestingplayground.com"
  },
  pageLoadTimeout: 6000,
});

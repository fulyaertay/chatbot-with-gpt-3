const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r3bdku",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

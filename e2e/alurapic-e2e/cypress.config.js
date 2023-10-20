const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h5dnws',
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = {
        e2e: {
          setupNodeEvents(on, config) {
            { "reporter"; "mochawesome",
                "reporterOptions"; 
                    { "reportDir"; "cypress/report/mochawesome-report",
                    "overwrite"; true,
                    "html"; true,
                    "json"; true,
                    "video"; true,
                    "timestamp"; "mmddyyyy_HHMMss" }}
                    },       
              },
          };    
    },
  },
});

const { defineConfig } = require('cypress');
module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions:{
  mochaFile:'results/test-output-[hash].xml',
  toConsole: true,
   }, e2e: {
  setupNodeEvents(on, config) {
  },
  },
  video: true});

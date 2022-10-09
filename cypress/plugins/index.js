const { startDevServer } = require("@cypress/vite-dev-server");

module.exports = (on, config) => {
  on("dev-server:start", (options) => startDevServer({ options }));
  require("@bahmutov/cypress-code-coverage/task")(on, config);
  on(
    "file:preprocessor",
    require("@bahmutov/cypress-code-coverage/use-browserify-istanbul"),
  );
  return config;
};

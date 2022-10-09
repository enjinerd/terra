import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
  },
  component: {
    setupNodeEvents(on, config) {
      console.log("setupNodeEvents for components");

      // https://github.com/bahmutov/cypress-code-coverage
      require("@bahmutov/cypress-code-coverage/plugin")(on, config);

      return config;
    },
    specPattern: "src/**/*{test,spec}.{ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    env: {
      coverage: {
        reportAfterEachSpec: "text",
      },
    },
  },
});

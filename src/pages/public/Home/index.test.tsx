import { mount } from "@cypress/react18";
import { BrowserRouter } from "react-router-dom";

import Home from ".";

it("Render hero tagline", () => {
  mount(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  cy.get("h1").contains("Automated AI code reviews for any stack");
});

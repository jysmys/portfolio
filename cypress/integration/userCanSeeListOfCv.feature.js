describe("User can navigate to CV and verifys the content", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("to cv site and check content", () => {
    beforeEach(() => {
      cy.get("#cv-tab").click();
    });

    it("displays cv header", () => {
      cy.get("#cv-header").should("contain", "CV");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("displays correct url", () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about")
        .and("contain", "cv");
    });

    it("does not displays About Me header ", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("the items on the page is clickable", () => {
      cy.get("#cv-1").click();
      cy.get(".title").should("contain", "Performance");
    });
  });
});

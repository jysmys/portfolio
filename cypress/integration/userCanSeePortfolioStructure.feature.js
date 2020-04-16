describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("/");
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", "Made with React 16.13.1");
    cy.get("#hello").should("contain", "Hello World");
  });
});

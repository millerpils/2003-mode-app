describe("Creating a restaurant", () => {
  it("should fill out the form and add a restaurant", () => {
    cy.visit("/restaurants");
    cy.get("a[href='/restaurants-manager/new']").click();

    cy.get("#name").type("Grease Shack11");
    cy.get("#address").type("21 Grease Street");
    cy.get("#postcode").type("GR1 2GR");
    cy.get(".btn").contains("Create").click();
    cy.url().should("include", "/restaurants");
    cy.get("h2").contains("Grease Shack11");
  });
});

describe("Creating a restaurant", () => {
  beforeEach(() => {
    cy.task("db:seed");
    cy.visit("/restaurants");
  });

  it("should fill out the form and add a restaurant", () => {
    cy.get("a[href='/restaurants-manager/new']").click();

    cy.get("#name").type("Grease Shack");
    cy.get("#address").type("21 Grease Street");
    cy.get("#postcode").type("GR1 2GR");
    cy.get(".btn").contains("Create").click();
    cy.url().should("include", "/restaurants");
    cy.get(".row--restaurants h2").eq(2).should("have.text", "Grease Shack");
  });
});

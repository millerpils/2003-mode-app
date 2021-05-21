describe("viewing a restaurant", () => {
  beforeEach(() => {
    cy.task("db:seed");
    cy.visit("/restaurants");
  });

  it("should take us to the view resto page", () => {
    cy.get(".row--restaurants a").first().click();
    cy.get("h1").should("have.text", "Pizza Hut");
  });
});

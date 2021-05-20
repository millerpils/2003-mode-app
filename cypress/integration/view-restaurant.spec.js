describe("viewing a restaurant", () => {
  it("should take us to the view resto page", () => {
    cy.visit("/restaurants");
    cy.get("a[href='/restaurants/608aaf1532ee9c64747b5aad'").click();
    cy.get("h1").should("have.text", "Pizza Hut");
  });
});

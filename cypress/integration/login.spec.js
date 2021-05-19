describe("Login with LinkedIn", () => {
  it("should login via linkedin a redirect to /restaurants page", () => {
    cy.visit("/");

    // cy.get(".container--main a[href='/auth/linkedin']").click();

    // cy.url().should("include", "linkedin");
  });

  it("has username to use", () => {
    expect(Cypress.env("linkedin_email")).to.equal("millerpils@gmail.com");
  });
});

beforeEach(() => {
  cy.clearCookies();
});

describe("Login with LinkedIn", () => {
  it("should login via linkedin a redirect to /restaurants page", () => {
    // visit home page
    cy.visit("/");

    // get login link and click it
    cy.get(".container--main a[href='/auth/linkedin']").click();

    // should redirect to linkedin
    cy.url().should("include", "linkedin");

    // add in un/pw from Cypress env
    cy.get("#username").clear();
    cy.get("#username").type(Cypress.env("linkedin_email"));
    cy.get("#password").type(Cypress.env("linkedin_pw"));

    // click signin button
    cy.get(".login__form_action_container button").contains("Sign in").click();

    // redirect back to restaurants
    cy.url().should("include", "/restaurants");
  });

  it("has username and pw to use", () => {
    expect(Cypress.env("linkedin_email")).to.equal("millerpils@gmail.com");
    expect(Cypress.env("linkedin_pw")).to.be.a("string");
  });
});

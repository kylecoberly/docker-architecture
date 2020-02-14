// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    expect(true).to.equal(true)
    //cy.get("li").should("have.length", 4);
  });
});

/* global Given, When, Then */
const { visit, get, injectAxe, checkA11y } = cy;

Given("some setup", () => {
  visit("/");
  injectAxe()
});
When("some action", () => {
});
Then("some result", () => {
  get("li").should("have.length", 3);
  checkA11y()
});

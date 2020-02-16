/* global Given, When, Then */
const { visit, get } = cy;

Given("some setup", () => {
  visit("/");
});
When("some action", () => {
  // Load page
});
Then("some result", () => {
  get("li").should("have.length", 3);
});

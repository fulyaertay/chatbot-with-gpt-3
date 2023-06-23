/// <reference types="cypress" />

context("Sending message to OpenAI", () => {
  it.only("Sending message to OpenAI", () => {
    //1-open web page
    cy.visit("https://chatbot-w-gpt-3.netlify.app/");
    //2-typing on input box
    cy.get("#user-input").type("how can i learn javascript?");
    //3-sending message to open ai
    cy.get("#submit-btn").click();
    //4-clear all conversations
    cy.get("#clear-btn").click();
    //get firebase request
    cy.request(
      "https://gpt-4-project-cafcf-default-rtdb.europe-west1.firebasedatabase.app/"
    ).then((response) => {
      assert.equal(response, [200, 201]);
      cy.log(response.status);
    });
    //get openai request
    cy.request("      https://api.openai.com/v1/chat/completions").then(
      (response) => {
        assert.equal(response, [200, 201]);
        cy.log(response.status);
      }
    );
  });
});

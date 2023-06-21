/// <reference types="cypress" />

context('openPage', () => {
   
    it('Open Home Page', () => {
      //open web page
      cy.visit('https://chatbot-w-gpt-3.netlify.app/')
      // typing on input box
      cy.get('#user-input').type("how can i learn javascript?")
      //sending message to open ai
      cy.get('#submit-btn').click()
      //clear all conversations
      cy.get('#clear-btn').click()
    })
}
)
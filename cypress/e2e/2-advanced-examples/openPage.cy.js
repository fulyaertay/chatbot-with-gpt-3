/// <reference types="cypress" />

context('openPage', () => {
   
    it('Open Home Page', () => {

      cy.visit('https://chatbot-w-gpt-3.netlify.app/')
      cy.get('#user-input').type("how can i learn javascript?")
      cy.get('#submit-btn').click()
    })
}
)
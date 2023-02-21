   /// <reference types="cypress" />
   
   
   import { faker } from '@faker-js/faker';
   const email = faker.internet.email(); 
   context('Local Storage', () => 
   
   {
     beforeEach(() => {
      cy.visit('https://subastasml.azurewebsites.net/')
      Cypress.on('uncaught:exception', (err,runnable) => {
        return false;
        
      });
      
    })
    Cypress.config('defaultCommandTimeout',60000)
    it('Test Case6', function (){
    cy.get('.cart-button-area > [b-kzuoaw03hv=""]').click()
    cy.get('a.custom-button').click({ force: true })
    cy.get('#Input_Email').click({ force: true })
    cy.get('#Input_Email').type(email)
    cy.get('#Input_Password').click({ force: true })
    cy.get('#Input_Password').type("Santo104@")
    cy.get('#Input_ConfirmPassword').click({ force: true })
    cy.get('#Input_ConfirmPassword').type("Santo104@")
    cy.get('#registerSubmit').click({ force: true }) 
  })
})



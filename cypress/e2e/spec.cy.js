   /// <reference types="cypress" />
   
   
   import { faker } from '@faker-js/faker';
   const randomName = faker.name.fullName(); // Rowan Nikolaus
   context('Local Storage', () => 
   
   {
     beforeEach(() => {
      cy.visit('https://admintransporteqas.alen.com.mx/')
      Cypress.on('uncaught:exception', (err,runnable) => {
        return false;
        
      });
      
    })
    //Cypress.config('defaultCommandTimeout',60000)
    it('Test Case6', function (){
    cy.get('#txtUsuario').type(randomName)
    cy.get('.pt-4 > :nth-child(1) > :nth-child(1) > .cssLabelReg').should("contain.text",'Usuario')
    cy.get('.col-10').should("contain.text",'Bienvenido al Portal ALEN Transportes')
    cy.get('input#CLAVE.form-control').click()
    cy.get('input#CLAVE.form-control').type("QUILANLA")
    cy.get('#btnEntrar').click()
  })
})

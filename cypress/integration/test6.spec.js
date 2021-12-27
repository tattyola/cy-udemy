/// <reference types="Cypress" />

describe('My forth test', () => {
    it('Test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.get('div .mouse-hover-content').invoke('show');
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top')


    })
})
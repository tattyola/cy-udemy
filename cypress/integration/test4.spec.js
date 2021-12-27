/// <reference types="Cypress" />

describe('My forth test', () => {
    it('Test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // popup alert
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        // window:alert
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        // window:confirm
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

        // link to open a new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://www.rahulshettyacademy.com/#/index');

        // go back
        cy.go('back');


    })
})
/// <reference types="Cypress" />

describe('My third test', () => {
    it('Test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);

        // static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

        // dynamic dropdown
        cy.get('input#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'India') {
                // $el.click();
                cy.wrap($el).click();
            }
        })

        // autocomplete
        cy.get('input#autocomplete').should('have.value', 'India');

        // visible invisible elements
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // radio button
        cy.get('input[value="radio1"]').check().should('be.checked');


    })
})
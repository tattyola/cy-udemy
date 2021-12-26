/// <reference types="Cypress" />

describe('My first test', () => {
    it('Does not do much', () => {
        cy.visit('/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //cy.get('div[class="product"]').should('have.length', 4);
        //cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name ').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text());
        })
        //const logo = cy.get(.brand) we can't do that, we have to use .than() to make it async
        //cy.log(logo.text())
    })
})
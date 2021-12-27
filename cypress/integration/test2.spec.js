/// <reference types="Cypress" />

describe('My second test', () => {
    it('Test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name ').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    })
})
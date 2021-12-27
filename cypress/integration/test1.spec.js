/// <reference types="Cypress" />

describe('My first test', () => {
    it('Does not do much', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // cy.get('div[class="product"]').should('have.length', 4);
        // cy.get('.product:visible').should('have.length', 4);
        // parent child chaining
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
            console.log('sf')
        })
        // cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
        // console.log('sf'); // it will print out firs in console coz cypress is not async and coz console.log is a not cypress method
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name ').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        // this is to print in logs
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text());// it is cypress method that is why it would be print out async
        })
        //const logo = cy.get(.brand) we can't do that, we have to use .than() to make it async
        //cy.log(logo.text())
    })
})
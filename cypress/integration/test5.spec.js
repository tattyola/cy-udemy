/// <reference types="Cypress" />

describe('My forth test', () => {
    it('Test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('table[class="table-display"] tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if(text.includes('Python')) {
                cy.get('table[class="table-display"] tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text();
                    expect(priceText).to.eq('25')
                })
            }
        })


    })
})
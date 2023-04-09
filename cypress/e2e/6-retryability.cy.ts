Cypress.config('defaultCommandTimeout', 16000)
describe('Retry ability demo', () => {
    it('visit delay', () => {
        cy.visit('/loaddelay',{timeout: 0})
    });
    it('visit delay', () => {
        cy.visit('/loaddelay')
    });

    it.only("Javascript specific delay",()=>{
        cy.visit('/clientdelay') 
        cy.xpath(`//button[contains(concat(@class, ' ')," btn-primary")]`)
            .click()      
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.') 
    })
});
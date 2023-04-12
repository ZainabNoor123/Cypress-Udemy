Cypress.config('defaultCommandTimeout', 16000)
describe('Retry ability demo', () => {
    it('visit delay', () => {
        cy.visit('/loaddelay',{timeout: 0})
    });
    it('visit delay', () => {
        cy.visit('/loaddelay')
    });

    it("Javascript specific delay",()=>{
        cy.visit('/clientdelay') 
        cy.xpath(`//button[contains(concat(@class, ' ')," btn-primary")]`)
            .click()      
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.') 
    })

    it.only('Progress bar delay ', ()=>{
        cy.visit("/progressbar")
        cy.get('#startButton').click()
        cy.get('#progressBar', {timeout: 30000}).should("have.text", "100%")
    })
});
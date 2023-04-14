describe('Enviroment Variable Demo', () => {
    it('Demo', () => {
        cy.log(`Printing Enviroment Variable Value : ${Cypress.env("demoVar")}`)
        cy.log(`Printing Enviroment Variable Value : ${Cypress.env("secondVar")}`)
    });
});
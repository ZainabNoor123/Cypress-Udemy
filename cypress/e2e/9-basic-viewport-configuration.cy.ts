//ViewPort is change with screen sixe
describe('cy.viewport() demo', () => {

    // alone running beforeEach give us error of uncaught expection
    // add support>exceptions.ts file to solve this error
    beforeEach(()=>{
        cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site`)
    })
    it('device name', () => {
        cy.viewport('iphone-8')
        cy.get("#mobile_menu_toggler").should("be.visible")
    })
    it("specific viewport", ()=>{
        cy.viewport(500,600)
        cy.get("#mobile_menu_toggler").should("is.exist")
    })
});
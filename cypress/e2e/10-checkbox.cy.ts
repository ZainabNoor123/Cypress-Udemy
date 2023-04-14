describe('Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/checkbox`)
    });
    it('checkbos scenrio', () => {
        cy.get('input[type="checkbox"]').click( {force: true})
        cy.get("#result").should("have.text", "text here")
    });
});

describe.only('The internet app', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternet")}checkboxes`)
    })
    it('checkboc scenerio', () => {
        cy.get('form#checkboxes input').eq(0).click().should("be.checked")
    });
});
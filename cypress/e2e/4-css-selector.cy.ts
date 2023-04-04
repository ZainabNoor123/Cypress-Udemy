describe("Locators",()=>{
    beforeEach(()=>{
        cy.visit("/dynamicid")
    })

    it("Dynamic Id Validation", ()=>{
       cy.contains("Button with Dynamic ID").should("have.text", "Button with Dynamic ID")
    })

    it("Cy.get + cy.find example",()=>{
        cy.get("div").find("button").should("have.text", "Button with Dynamic ID")
    })

    it("find button by class example",()=>{
        cy.get(`button[class="btn btn-primary"]`)
            .should("have.text", "Button with Dynamic ID")
    })

    it("find button by class value example",()=>{
        cy.get(".btn-primary")
            .should("have.text", "Button with Dynamic ID")
    })
})
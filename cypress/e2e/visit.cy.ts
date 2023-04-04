describe('basics', () => {

  beforeEach(()=>{
    cy.visit('/textinput')
  })

  it('visit explanation', () => {
      //chainable functions url()
      cy.url().then((url)=>{  
        cy.log(`printing the url: ${url}`)
        expect(url).to.contains("/textinput") //Assertion
      })
  })

  it ('Title validation',()=>{
    cy.title().then((title)=>{
      cy.log(`Title is: ${title}`)
      expect(title).to.be.eq('Text Input') //Assertion
    })
  })

  it("clickable button validation",()=>{
   cy.get('form').within(()=>{
      cy.get('input[id="newButtonName"]').type("Test")
      cy.get('button[id="updatingButton"]').as(`Button That Should Change it's Name Based on Input Value`)
        .click()
    cy.get('button[id="updatingButton"]').contains('Test')
    })
  })
      
  it('Input Challenge',()=>{
      cy.get("input#newButtonName").type("Hello")
      cy.get('button#updatingButton')
        .click()
        .should('have.text', 'Hello')
  })
})

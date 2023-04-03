describe('basics', () => {

  beforeEach(()=>{
    cy.visit('/textinput')
  })

  it('visit explanation', () => {
      cy.url().then((url)=>{
        cy.log(`printing the url: ${url}`)
        expect(url).to.contains("/textinput")
      })
    })
  })
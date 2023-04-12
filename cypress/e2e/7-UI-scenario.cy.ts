describe.skip('Click Challenge', () => {
    beforeEach(()=>{
        cy.visit('/click')
    })
    it('class assertions', () => {
        cy.get('#badButton').click().should('have.class', 'btn-success')
    });
    it('background assertions', () => {
        cy.get('#badButton').click().should('have.css','background-color', 'rgb(40, 167, 69)')
    });
});

describe.skip('Hover Challenge', () => {
    beforeEach(()=>{
        cy.visit('/mouseover')
    })
    it('hover with Cypress workaround', () => {
        cy.get('.text-primary').trigger('mouseover').click()
       // cy.get('#clickCount').should('increase.number', '1')
    });
    it('hover with Cypress workaround', () => {
       cy.get('.text-primary').realHover()
       
    });
});

describe('dynamic table comparison', () => {
    beforeEach(()=>{
        cy.visit('/dynamictable')
    })
    it('Chrome CPU test', () => {
        cy.get(`div[role='row'] span`).each(($cell)=>{
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} row!`)
                let chromeRowValues: string[] = []
                chromeRowValues.push($cell.next().text())
                chromeRowValues.push($cell.next().next().text())
                chromeRowValues.push($cell.next().next().next().text())
                chromeRowValues.push($cell.next().next().next().next().text())

                cy.log('chrome values in row', chromeRowValues)

                chromeRowValues.forEach((chromeValue)=>{
                    if(chromeValue.includes('%'))
                    {
                        cy.log(chromeValue)
                        cy.get(".bg-warning").should('have.text', `Chrome CPU: ${chromeValue}`)
                    }
                })
            }
        })
    });
});

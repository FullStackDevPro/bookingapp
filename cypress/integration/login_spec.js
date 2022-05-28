describe('Input form', () => {
    
    
    it('accepts input',() =>{
        cy.visit('/')
        const typedText ='vheyam@hotmail.com'
        cy.get('input[type=text]')
        .type(typedText)
        .should('have.value', typedText)
   
        const typedText2 ='ismail'
    
        cy.get('input[type=password]')
        .type(typedText2)
        .should('have.value', typedText2)
        
    
        cy.get('.button-primary').click()
    })
  })
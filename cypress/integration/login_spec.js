describe('Tests input to form', () => {
    beforeEach(() =>{
        cy.visit('/')
    })

    it('focuses input on load', () => {
      
      cy.focused()
        .should('have.class', 'emailinputtest')
    })
    
    it('accepts input',() =>{
        const typedText ='vheyam@hotmail.com'
    
        cy.get('.emailinputtest')
        .type(typedText)
        .should('have.value', typedText)
   
        const typedText2 ='ismail'
    
        cy.get('.passwordinputtest')
        .type(typedText2)
        .should('have.value', typedText2)
        
    })
    
  })
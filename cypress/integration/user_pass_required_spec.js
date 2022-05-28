describe('Login credentials', () => {
    it('requires login by user name and password', () => {
      cy.visit('/')
      cy.get('.button-primary').click()
      cy.get('.Toastify__toast-body')
      .should('contain','Invalid Email')
      cy.get('.Toastify__toast-body')
      .should('contain','Please, enter the password')
    })
  })
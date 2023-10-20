describe('LOGIN Page failed', () => {
  it('should show a error message so the user knows that he needs to fill up the fields username and password', () => {
    cy.visit('http://localhost:4200/');

    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  });
});
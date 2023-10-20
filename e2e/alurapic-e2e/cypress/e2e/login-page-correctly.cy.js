describe('LOGIN Page correctly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should be able to login to ALURAPIC', () => {
    cy.login('user-test', '123456789');
  });

  it('should show a pop-up informig that the username and login are incorrect', () => {
    cy.intercept('POST', 'http://localhost:3000/user/login', {statusCode: 400})
      .as("stubPost");
    
    cy.login('usertest', 'senha1789');
    cy.wait('@stubPost');
  });
});
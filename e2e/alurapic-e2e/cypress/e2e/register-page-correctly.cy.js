import { RegisterPageTest } from '../support/pages/register/register.page';

describe('REGISTER Page correctly', () => {
  const users = require('../fixtures/users.json');
  
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });
  
  users.forEach(user => {
    it('should be able to register a new user to ALURAPIC', () => {
      const registerPage = new RegisterPageTest(user);
      
      registerPage.navigateToRegisterPage();
      registerPage.fillUpRegisterForm();
      registerPage.sendFormData();
    });
  });
});
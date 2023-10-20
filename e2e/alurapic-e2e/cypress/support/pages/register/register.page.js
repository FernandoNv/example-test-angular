import { ELEMENTS } from "./elements";

export class RegisterPageTest{

  constructor(user){
    this.user = user;
  }

  navigateToRegisterPage(){
    cy.visit('http://localhost:4200/');
    // cy.contains('a', 'Register now').click();
    cy.get(ELEMENTS.registerNow).click();
  }

  fillUpRegisterForm(){
    cy.get(ELEMENTS.email).type(this.user.email);
    cy.get(ELEMENTS.fullName).type(this.user.fullName);
    cy.get(ELEMENTS.registerUserName).type(this.user.userName);
    cy.get(ELEMENTS.registerPassword).type(this.user.password);
  }

  sendFormData(){
    cy.get(ELEMENTS.btnRegister).click();
  }
}
describe('API ALURAPIC', () => {
  let userName, password;

  before(() => {
    userName = Cypress.env('userName');
    password = Cypress.env('password');
  });

  it('API login', ()=> {
    cy.request({ 
        method: 'POST', 
        url:  'http://localhost:3000/user/login', 
        body: Cypress.env()
      })
      .then((resp) => {
        expect(resp.status).to.be.equal(200);
        expect(resp.body).is.not.empty;
        expect(resp.body).to.have.property('id');
        expect(resp.body.id).to.be.equal(3);
      })
  });

  it(`Get user's image`, () => {
    cy.request({ 
        method: 'GET', 
        url: 'http://localhost:3000/user-test/photos'
      })
      .then(resp => {
        const data = resp.body;

        expect(resp.status).to.be.equal(200);
        expect(data).is.not.empty;
        expect(data[0]).to.have.property('description');
        expect(data[0].description).to.be.equal('the batman');
      });
  });
});
describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name="password"]');
    const button = () => cy.get('button').contains('Submit');
    const terms =() => cy.get('[type = checkbox]')

    it('Sanity Test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
      })
  
      it('Test to make sure elements are showing', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        password().should('exist');
        terms().should('exist');
        button().should('exist');  
      })


    it('can navigate to url', () => {
        cy.url().should('include', 'localhost');
    })

    it('button starts out disabled', () => {
        button().should('be.disabled');
    })

it('can type in inputs', () => {
        firstNameInput()
            .should('have.value', '')
            .type('Tori')
            .should('have.value', 'Tori');

        lastNameInput()
            .should('have.value', '')
            .type('Test')
            .should('have.value', 'Test');
           
        emailInput()
            .should('have.value', '')
            .type('emailblah@gmail.com')
          .should('have.value', 'emailblah@gmail.com');

        password()
          .should('have.value', '')
          .type('Password123')
          .should('have.value', 'Password123');
        button().should('be.disabled')
        terms().check()

    })

    it('the submit button enables when inputs are filled ', () => {
    firstNameInput()
        .should('have.value', '')
        .type('Test')
        .should('have.value', 'Test');

    lastNameInput()
        .should('have.value', '')
        .type('Test')
        .should('have.value', 'Test');

    emailInput()
        .should('have.value', '')
        .type('emailblah@gmail.com')
        .should('have.value', 'emailblah@gmail.com');
        button().should('be.disabled');
   
    password()
          .should('have.value', '')
          .type('Password112')
          .should('have.value', 'Password112');
        button().should('be.disabled');
    })

    it('Form validation if an input is empty', () => {
        firstNameInput()
        .should('have.value', '')
        .type('Name')
        .should('not.have.value', '');
      button().should('be.disabled');

      lastNameInput()
        .should('have.value', '')
        .type('Name')
        .should('not.have.value', '');
      button().should('be.disabled');

      emailInput()
        .should('have.value', '')
        .type('emailblah@gmail.com')
        .should('not.have.value', '');
      button().should('be.disabled');

      password()
        .should('have.value', '')
        .type('Password')
        .should('not.have.value', '');
      button().should('be.disabled');


      terms()
        .should('not.have.value', 'false')
        .check()
        .should('not.have.value', 'false');
      button().should('be.enabled');

    });


});
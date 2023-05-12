// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
import Login from "../pages/Login.js";

const login = new Login()

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 

    login.getUserNameInput().should('be.visible').type(username);
    login.getPasswordInput().should('be.visible').type(password);
    login.getLoginButton().should('be.visible').click({ force: true });
 })
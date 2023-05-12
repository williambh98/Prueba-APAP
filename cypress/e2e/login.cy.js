import Login from "../pages/Login.js";

const login = new Login()
const userName = 'tomsmith';
const password = 'SuperSecretPassword!';

beforeEach(() => {
    login.visit();
})

describe("Login Test", () => {
    it("El usuario puede visitar la pagina web", () => {
        login.visit();
    })

    it("El usuario puede iniciar sesion", () => {
        cy.login(userName, password);
    })

    it("El usuario ve un mensaje exitoso luego de cada login", () => {
        cy.login(userName, password);
        login.getAlert().should('be.visible').should('have.class','success').contains('You logged into a secure area!');
        login.getH2("Secure Area").should('be.visible');
        login.getLogoutButton().should('be.visible');
    })

    it("El usuario ve un mensaje de error de 'Your username is invalid!' al ingresar el usuario incorrecto", () => {
        cy.login("123", "123");
        login.getAlert().should('be.visible').should('have.class','error').contains('Your username is invalid!');
    })

    it("El usuario ve un mensaje de error de 'Your username is invalid!' al ingresar el contraseña incorrecta", () => {
        cy.login(userName, "123");
        login.getAlert().should('be.visible').should('have.class','error').contains('Your password is invalid!');
    })
})
class Login {
    constructor() {
        this.url = "login";
    }

    visit() {
        return cy.visit(this.url);
    }

    getH2(text) {
        return cy.get('h2').contains(text);
    }

    getUserNameInput() {
        return cy.get('[id="username"]');
    }

    getPasswordInput() {
        return cy.get('[id="password"]');
    }

    getLoginButton() {
        return cy.get('button[type="submit"]');
    }
    getLogoutButton(){
        return cy.get('a[href="/logout"]');
    }
    getAlert(){
        return cy.get('[id="flash"]');
    }
}

module.exports = Login
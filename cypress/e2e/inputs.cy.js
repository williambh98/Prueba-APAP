/// <reference types="Cypress" />

import Inputs from "../pages/Inputs";

const input = new Inputs()

beforeEach(() => {
    input.visit();
})

describe("Input Test", () => {
    it("El usuario puede visualizar el input", () => {
        input.getInputNumber().should("be.visible");
    })

    it("El usuario puede ingresar numeros positivos", () => {
        let amount = 111111111111111;
        input.getInputNumber().should("be.visible").type(amount).should('have.value', amount);
    })

    it("El usuario puede ingresar numeros negativos", () => {
        let amount = -111111111111111;
        input.getInputNumber().should("be.visible").type(amount).should('have.value', amount);
    })
    it("El usuario no puede ingresar texto", () => {
        input.getInputNumber().should("be.visible").type("TestAPAP").should('have.text', "");
    })
})
/// <reference types="Cypress" />

import Hovers from "../pages/Hovers";

const hovers = new Hovers()

beforeEach(() => {
    hovers.visit();
})

describe("Hovers Test", () => {

    it("Los avatars tienen ventanas emergentes con url", () => {
        
        hovers.getFigures().each(($el) => {
            expect($el.find('img')).to.be.visible;
            expect($el.find('img')).to.have.attr("src");
            cy.wrap($el).realHover();
            hovers.getFiguresCaptions().should('be.visible').should('have.attr','href');
        });
        
    })
})
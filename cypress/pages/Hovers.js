class Hovers
{
    constructor()
    {
        this.url = "hovers"
    }

    visit()
    {
        cy.visit(this.url);
    }

    getFigures(){
        return cy.get('.figure');
    }

    getFiguresCaptions(){
        return cy.get('.figcaption').find('a');
    }
}

module.exports = Hovers;
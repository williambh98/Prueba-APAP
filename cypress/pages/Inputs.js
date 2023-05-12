class Inputs
{
    constructor( )
    {
        this.url = "inputs"
    }

    visit() {
        return cy.visit(this.url);
    }

    getInputNumber()
    {
        return cy.get('[type="number"]');
    }
}

module.exports = Inputs;
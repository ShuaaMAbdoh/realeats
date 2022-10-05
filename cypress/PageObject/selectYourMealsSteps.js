class SelectYourMealsSteps{

    email(email){
        cy.get('#email').focus().type(email)
        return this
    }

    zipCode(zipCode){
        cy.get('#zip-code').focus().type(zipCode)
        return this
    }

    getStartStep1(){
        cy.get(':nth-child(3) > .btn').click({force: true})
    }

    select4Meals(){
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click({force: true})
    }

    addMealToCart(){
        cy.get(':nth-child(1) > .meal > .d-none > :nth-child(2) > .add').click({force: true})
    }

    nextAddOne(){
        cy.get('#btn-continue').click({force: true})
    }

    continueToCheckout(){
        cy.get('#btn-continue').click({force: true})
    }
}
export default SelectYourMealsSteps
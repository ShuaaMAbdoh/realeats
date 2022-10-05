class Payment{

    fullName(fullName){
        cy.get('#fullName').focus().type(fullName)
        return this
    }

    address(address){
        cy.get('#address1').focus().type(address)
        return this
    }

    city(city){
        cy.get('#city').focus().type(city)
    }

    selectState(state){
        cy.get('#state').select(state)
    }

    phoneNumber(phoneNumber){
        cy.get('#phone').focus().type(phoneNumber)
        return this
    }

    submitOrder(){
        cy.get('#submit-delivery').click({force: true})
    }

    creditCardNumber(cardNumber){
        cy.get('input[name="cardnumber"]').focus({force: true}).type(cardNumber)
        return this
    }

    expirationDate(expirationDate){
        cy.get('input[name="exp-date"]').focus({force: true}).type(expirationDate)
        return this
    }

    cardCVC(cardCVC){
        cy.get('input[name="cardCvc"]').focus({force: true}).type(cardCVC)
        return this
    }

}
export default Payment
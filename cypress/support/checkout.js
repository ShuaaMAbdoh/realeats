
import Payment from "../PageObject/payment"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

export function checkout() {
    const payment = new Payment()
    describe('checkout', () => {
        it('payment process', () => {
        payment.fullName('Shuaa Abdoh')
        payment.address('2113 New York 7')
        payment.city('Nablus')
        payment.selectState('Alabama')
        payment.phoneNumber('4555555555')
        payment.submitOrder()
        cy.wait(10000)
        cy.reload(true)
        // payment.creditCardNumber('411111111111111')
        // payment.expirationDate('1126')
        // payment.cardCVC('123')
        })
    })
}
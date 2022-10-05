import HomePage from '../../PageObject/homePage'
describe('Add product to Cart', () => {
  const homePage=new HomePage()
  it('Select a product', () => {
    cy.visit('/')
      homePage.getStarted()
      homePage.email('exapmle@email.com')
      homePage.zipCode('12345')
      homePage.getStartStep1()
  })
})
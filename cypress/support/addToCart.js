import { addMealToCart } from "../integration/Cart/addToCart.cy";
import HomePage from '../PageObject/homePage'
import SelectYourMealsSteps from '../PageObject/selectYourMealsSteps'

export function addMealToCartSteps() {
    describe('Add product to Cart', () => {

        Cypress.Cookies.defaults({
            preserve: 'session_id',
          })

    const homePage = new HomePage()
    const selectYourMealsSteps = new SelectYourMealsSteps()

    it('Select a product', () => {
        cy.visit('/')
        homePage.getStarted()
        selectYourMealsSteps.email('sabdoh@itgsotfware.com')
        selectYourMealsSteps.zipCode('14013')
        selectYourMealsSteps.getStartStep1()
        selectYourMealsSteps.select4Meals()
        for(let n = 0; n < 4; n ++){
            selectYourMealsSteps.addMealToCart()
        }
        selectYourMealsSteps.nextAddOne()
        selectYourMealsSteps.nextAddOne()
    })
    })
}
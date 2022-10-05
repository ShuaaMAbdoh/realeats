import { addMealToCartSteps } from "../../support/addToCart"
import { checkout } from "../../support/checkout"

describe('Checkout', () => {

  context('addToCart.js', function() {
    addMealToCartSteps()
  })

  context('checkout.js', function(){
    checkout()
  })

})
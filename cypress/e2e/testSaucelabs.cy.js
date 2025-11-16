
import Product from "../support/pages/product";
import login from "../support/pages/login";
import Cart from "../support/pages/cart";
import Checkoutone from "../support/pages/checkoutOne";
import Checkouttwo from "../support/pages/checkouttwo";
import Order from "../support/pages/order";


describe('End to end test ecommerce', () => {
const loginPage = new login();
const productPage = new Product()
const cartPage = new Cart();
const checkoutOnePages = new Checkoutone();
const checkoutTwo = new Checkouttwo();
const orderPage = new Order();
beforeEach(()=>{
const url = "https://www.saucedemo.com/";
   cy.visit(url);
})


    it('End to end product buying', () => {
        
        
        loginPage.login();
        productPage.addToCart();
        productPage.goToCart();
        cartPage.checkout();
        checkoutOnePages.fillYourInfo();
        checkoutTwo.finish();
        orderPage.verifySuccess();
        orderPage.goBack();
        
productPage.logout();

 cy.url().should('include', 'https://www.saucedemo.com/')


    })

     
});
import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import userPage from '../pages/UserPage'
import overviewPage from '../pages/OverviewPage'
import checkoutPage from '../pages/CheckoutPage'

fixture ('Checkout test suite')
    .page('https://www.saucedemo.com/checkout-complete.html')

    test('Complete a purchase', async t => {

        // Login the user first 
        await t.
            typeText(loginPage.usernameField, "standard_user", {paste:true})
            .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
            .click(loginPage.loginButton)
    
        // Adding a single item to the shopping cart
        await t.click(inventoryPage.inventoryItem)
        await t.click(inventoryPage.addToCart)
        await t.click(inventoryPage.shoppingCartContainer)
        await t.click(cartPage.checkOutbutton)

        //User navigates to overview page
        await t.typeText(userPage.firstName, "Lilia", {paste:true})
        await t.typeText(userPage.lastName, "Flores", {paste:true})
        await t.typeText(userPage.zipPostalCode, "90210", {paste:true})
        await t.click(userPage.continueButton)

        //User navigates to checkout page
        await t.click(overviewPage.finishButton)

        //Assertions

        await t.expect(checkoutPage.checkoutCompleteHeader.exists).ok()

    })
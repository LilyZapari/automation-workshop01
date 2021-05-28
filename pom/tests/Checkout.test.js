import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import userPage from '../pages/UserPage'
import overviewPage from '../pages/OverviewPage'
import checkoutPage from '../pages/CheckoutPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture ('Checkout test suite')
    .page(`${URLS.CHECKOUT_PAGE}`)
    .beforeEach(async t => {
        // Login the user first 
        await loginPage.loginUser(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Complete a purchase', async t => {

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

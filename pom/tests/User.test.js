import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import userPage from '../pages/UserPage'
import overviewPage from '../pages/OverviewPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture ('User test suite')
    .page(`${URLS.USER_PAGE}`)
    .beforeEach(async t => {
        // Login the user first 
        await loginPage.loginUser(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

        // Adding a single item to the shopping cart
        await t.click(inventoryPage.inventoryItem)
        await t.click(inventoryPage.addToCart)
        await t.click(inventoryPage.shoppingCartContainer)
        await t.click(cartPage.checkOutbutton)
    })

test('Continue with missing mail information', async t => {

    //Validate error message in the user's information page
    await t.typeText(userPage.firstName, "Lilia", {paste:true})
    await t.typeText(userPage.lastName, "Flores", {paste:true})
    await t.click(userPage.continueButton)
    
    // Assertions
    await t.expect(userPage.errorPostalCode.exists).ok()
    await t.expect(userPage.errorPostalCode.innerText).eql("Error: Postal Code is required")        
})

test('Fill user information', async t => {

    //User navigates to overview page
    await t.typeText(userPage.firstName, "Lilia", {paste:true})
    await t.typeText(userPage.lastName, "Flores", {paste:true})
    await t.typeText(userPage.zipPostalCode, "90210", {paste:true})
    await t.click(userPage.continueButton)
    
    // Assertions
    await t.expect(overviewPage.checkoutOverviewTitle.exists).ok()  
})
 
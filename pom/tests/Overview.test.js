import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import userPage from '../pages/UserPage'
import overviewPage from '../pages/OverviewPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture ('Overview test suite')
    .page(`${URLS.OVERVIEW_PAGE}`)
    .beforeEach(async t => {
        // Login the user first 
        await loginPage.loginUser(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Final order items', async t => {

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

    const cartPAgeItemText = await cartPage.cartFirstItem.innerText
    const overviewPageItemText = await overviewPage.overviewItemAdded.innerText

    console.log("cartPAgeItemText:", JSON.stringify(cartPAgeItemText))
    console.log("overviewPageItemText:", JSON.stringify(overviewPageItemText))
    
    //Assertions
    await t.expect(cartPAgeItemText).eql(overviewPageItemText)
})

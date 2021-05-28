import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture ('Cart test suite')
    .page(`${URLS.CART_PAGE}`)
    .beforeEach(async t => {
        // Login the user first 
        await loginPage.loginUser(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Navigate to the shopping cart', async t => {

    // Clicking on Shopping Cart
    await t.click(inventoryPage.shoppingCartContainer)

    // Assertions
    await t.expect(cartPage.yourCartTitle.exists).ok()
})


test('Add a single item to the shopping cart', async t => {

    // Adding a single item to the shopping cart
    await t.click(inventoryPage.inventoryItem)
    await t.click(inventoryPage.addToCart)
    await t.click(inventoryPage.shoppingCartContainer)

    // Assertions
    await t.expect(cartPage.cartContentsContainer.exists).ok()
    await t.expect(cartPage.cartContentsContainer.innerText).eql("1")  
})


test('Add multiple items to the shopping cart', async t => {

    // Adding multiple items to the shopping cart
    await t.click(inventoryPage.addToCart)
    await t.click(inventoryPage.secondAddToCart)    
    await t.click(inventoryPage.shoppingCartContainer)

    // Assertions
    await t.expect(cartPage.cartFirstItem.exists).ok()
    await t.expect(cartPage.cartSecondItem.exists).ok() 
})

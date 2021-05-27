import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'

fixture ('Cart test suite')
    .page('https://www.saucedemo.com/cart.html')

test('Navigate to the shopping cart', async t => {

    // Login the user first 
    await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)

    // Clicking on Shopping Cart
    await t.click(inventoryPage.shoppingCartContainer)

    // Assertions
    await t.expect(cartPage.yourCartTitle.exists).ok()

})


test('Add a single item to the shopping cart', async t => {

    // Login the user first 
    await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)

    // Adding a single item to the shopping cart
    await t.click(inventoryPage.inventoryItem)
    await t.click(inventoryPage.addToCart)
    await t.click(inventoryPage.shoppingCartContainer)

    // Assertions
    await t.expect(cartPage.cartContentsContainer.exists).ok()
    await t.expect(cartPage.cartContentsContainer.innerText).eql("1")
    
})


test('Add multiple items to the shopping cart', async t => {

    // Login the user first 
    await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)

    // Adding multiple items to the shopping cart

    await t.click(inventoryPage.addToCart)
    await t.click(inventoryPage.secondAddToCart)    
    await t.click(inventoryPage.shoppingCartContainer)

    // Assertions
    await t.expect(cartPage.cartFirstItem.exists).ok()
    await t.expect(cartPage.cartSecondItem.exists).ok()
    
})


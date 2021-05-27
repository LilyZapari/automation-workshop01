import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

fixture ('Inventory test suite')
    .page('https://www.saucedemo.com/inventory.html')

test('Logout from product page', async t => {

    // Login the user first 
    await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)

    // Expand the menu
    await t.click(inventoryPage.burgerMenu)
    
    // Clicking logout
    await t.click(inventoryPage.logoutSideBarLink)
    
    // Assertions
    await t.expect(loginPage.loginLogo.exists).ok()

})
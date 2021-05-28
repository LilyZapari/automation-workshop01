import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture ('Inventory test suite')
    .page(`${URLS.INVENTORY_PAGE}`)
    .beforeEach(async t => {
        // Login the user first 
        await loginPage.loginUser(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Logout from product page', async t => {

    // Expand the menu
    await t.click(inventoryPage.burgerMenu)
    
    // Clicking logout
    await t.click(inventoryPage.logoutSideBarLink)
    
    // Assertions
    await t.expect(loginPage.loginLogo.exists).ok()
})

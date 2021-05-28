import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture('Login test suite')
    .page(`${URLS.LOGIN_PAGE}`)

test('Login with an invalid user', async t => {

    await loginPage.loginUser(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(loginPage.errorMessage.exists).ok()
    await t.expect(loginPage.errorMessage.innerText).eql("Epic sadface: Username and password do not match any user in this service")
})

test('Login with a valid user', async t => {

    await loginPage.loginUser(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(inventoryPage.productsTittle.exists).ok()
    await t.expect(inventoryPage.productsTittle.innerText).eql("PRODUCTS")
})

import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

fixture ('Login test suite')
    .page('https://www.saucedemo.com/')

test('Login with an invalid user', async t => {
    await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "invalid_password", {paste:true})
        .click(loginPage.loginButton)


    await t.expect(loginPage.errorMessage.exists).ok()
    await t.expect(loginPage.errorMessage.innerText).eql("Epic sadface: Username and password do not match any user in this service")

})

test('Login with a valid user', async t => {
    await t.
        typeText(loginPage.usernameField, "standard_user", {paste:true})
        .typeText(loginPage.passwordField, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)

    await t.expect(inventoryPage.productsTittle.exists).ok()
    await t.expect(inventoryPage.productsTittle.innerText).eql("PRODUCTS")

})

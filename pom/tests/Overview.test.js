import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import userPage from '../pages/UserPage'
import overviewPage from '../pages/OverviewPage'

fixture ('Overview test suite')
    .page('https://www.saucedemo.com/checkout-step-two.html')


    test('Final order items', async t => {

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
    
        const cartPAgeItemText = await cartPage.cartFirstItem.innerText
        const overviewPageItemText = await overviewPage.overviewItemAdded.innerText

        console.log("cartPAgeItemText:", JSON.stringify(cartPAgeItemText))
        console.log("overviewPageItemText:", JSON.stringify(overviewPageItemText))
        
        //Assertions
        await t.expect(cartPAgeItemText).eql(overviewPageItemText)
    })


    
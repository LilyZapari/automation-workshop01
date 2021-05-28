import { Selector, t } from 'testcafe'
 
class LoginPage {
    constructor(){
        this.loginButton = Selector('#login-button');
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector ('#password');
        this.errorMessage = Selector ('#login_button_container > div > form > div.error-message-container.error > h3');
        this.loginLogo = Selector ('#root > div > div.login_logo');        
    }

    async loginUser(username, password) {
        if (username != null && username !== '') {
            await t.typeText(this.usernameField, username, {paste:true})
        }

        if (password != null && password !== '') {
            await t.typeText(this.passwordField, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
}

export default new LoginPage()
import { Selector } from 'testcafe'
 
class LoginPage {
    constructor(){
        this.loginButton = Selector('#login-button');
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector ('#password');
        this.errorMessage = Selector ('#login_button_container > div > form > div.error-message-container.error > h3');
        this.loginLogo = Selector ('#root > div > div.login_logo');
        
    }

}

export default new LoginPage()
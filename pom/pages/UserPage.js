import {Selector} from 'testcafe'

class UserPage{
    constructor(){

        this.firstName = Selector ('#first-name');
        this.lastName = Selector ('#last-name');
        this.zipPostalCode = Selector ('#postal-code');
        this.errorPostalCode = Selector ('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3');
        this.continueButton = Selector ('#continue');

    }


}

export default new UserPage()
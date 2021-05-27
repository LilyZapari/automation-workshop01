import {Selector} from 'testcafe'

class CheckoutPage{
    constructor(){
        this.checkoutCompleteHeader = Selector ('#header_container > div.header_secondary_container');
        
    }
}

export default new CheckoutPage()



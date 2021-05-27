import {Selector} from 'testcafe'

class CartPage{
    constructor(){
        this.yourCartTitle = Selector ('#header_container > div.header_secondary_container > span');
        this.cartContentsContainer = Selector ('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_quantity');
        this.cartFirstItem = Selector ('#item_4_title_link > div');
        this.cartSecondItem = Selector ('#item_0_title_link');
        this.checkOutbutton = Selector ('#checkout');

    }
}

export default new CartPage()
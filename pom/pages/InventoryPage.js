import {Selector} from 'testcafe'

class InventoryPage{
    constructor(){

        this.productsTittle = Selector ('#header_container > div.header_secondary_container > span');
        this.burgerMenu = Selector ('#react-burger-menu-btn');
        this.logoutSideBarLink = Selector ('#logout_sidebar_link');
        this.shoppingCartContainer = Selector ('#shopping_cart_container > a');
        this.inventoryItem = Selector ('#item_4_img_link');
        this.addToCart = Selector ('#add-to-cart-sauce-labs-backpack');
        this.secondInventoryItem = Selector ('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size');
        this.secondAddToCart = Selector ('#add-to-cart-sauce-labs-bike-light');
        this.backToProducts = Selector ('#back-to-products');

                
    }

}

export default new InventoryPage()
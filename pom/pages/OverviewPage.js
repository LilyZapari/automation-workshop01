import {Selector} from 'testcafe'

class OverviewPage{
    constructor(){

        this.checkoutOverviewTitle = Selector ('#header_container > div.header_secondary_container > span');
        this.overviewItemAdded = Selector ('#item_4_title_link > div');
        this.finishButton = Selector ('#finish');

    }
}


export default new OverviewPage()


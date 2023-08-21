const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LocationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getLocation () {
        return $('(//div[@class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1okcig"]/button)[1]');
    }
    
    async chooseLocation () {
        await this.getLocation.click();
    }
}

module.exports = new LocationPage();

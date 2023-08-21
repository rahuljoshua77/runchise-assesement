const { browser,$ } = require('@wdio/globals')
const Page = require('./page');
 
/**
 * sub page containing specific selectors and methods for a specific page
 */
class addtocardPage extends Page {
    /**
     * define selectors using getter methods
     */

    get chooseProudct () {
        return $('(//button[contains(@class,"MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButtonBase-root")])[1]');
    }
    
    get checkboxOne () {
        return $('(//input[@type="checkbox"])[1]');
    }

    get checkboxTwo () {
        return $('(//input[@type="checkbox"])[3]');
    }

    get addtoCart () {
        return $('(//button[contains(@class,"MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root")])[1]');
    }


    get addOne () {
        return $('(//p[text()="1"]/parent::div/button)[2]')
    }

    get addoneCart () {
        return $('(//p[text()="+"]/parent::div/parent::button)[2]')
    }

    get setOther () {
        return $('//div[@role="presentation"]')
    }

    get checkOut () {
        return $('//p[text()="Total"]/parent::div/parent::div/parent::button')
    }

    get productName () {
        return $('//button[contains(@class,"MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root")]/parent::div/p')
    }

    get removeItem () {
        return $('//p[text()="-"]/parent::div/parent::button')
    }

    get productDetail () {
        return $('//img[@alt="Pesan Popcorn Caramel dari Maestro Cafe"]')
    }

    get productdetailname () {
        return $('((//img[@alt="Pesan Popcorn Caramel dari Maestro Cafe"])[2]/parent::div//p)[1]')
    }

    async checkoutProduct () {
        await this.chooseProudct.click();
        await this.checkboxOne.click();
        await this.checkboxTwo.click();
        await this.addtoCart.click();
        await this.addOne.click();
        await this.addoneCart.click();
        await browser.refresh();
        await this.checkOut.click();
    }
    async removeitemfromCart () {
        await this.removeItem.click();
        await this.productDetail.click();
    }


    open () {
        return super.open('locations');
    }
}

module.exports = new addtocardPage();

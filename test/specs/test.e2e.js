const { expect } = require('@wdio/globals')
const ProductPage = require('../pageobjects/product.page')
const LocationPage = require('../pageobjects/location.page')

describe('Automation Test Runchise', () => {
    it('should able add to cart', async () => {
        await ProductPage.open()
        await LocationPage.chooseLocation()
        await ProductPage.checkoutProduct()
        await expect(ProductPage.productName).toHaveTextContaining(
            'Popcorn Caramel')
    })
    it('should able remove item from cart', async () => {
        await ProductPage.removeitemfromCart()
        await expect(ProductPage.productdetailname).toHaveTextContaining(
            'Popcorn Caramel')
    })

})


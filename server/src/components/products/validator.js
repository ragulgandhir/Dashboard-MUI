const Helpers = require('../../libs/helpers')

class Validator {
  constructor() {
    this.helpers = new Helpers()
  }
   
  productValidation (data) {
    const errors = []
    if (data) {
      const {
        categoryId,
        productName,
        productDescription,
        originalPrice,
        sellingPrice,
        stock
      } = data
      if (!categoryId) {
        errors.push('CATEGORY_ID_IS_REQUIRED')
      }
      if (!productName) {
        errors.push('PRODUCT_NAME_IS_REQUIRED')
      }
      if (!productDescription) {
        errors.push('PRODUCT_DESCRIPTION_IS_REQUIRED')
      }
      if (!originalPrice) {
        errors.push('ORIGINAL_PRICE_IS_REQUIRED')
      }
      if (!sellingPrice) {
        errors.push('SELLING_PRICE_IS_REQUIRED')
      }
      if (!stock) {
        errors.push('STOCK_IS_REQUIRED')
      }
      return errors
    }
    return ['INVALID_DATA']
  }
}

module.exports = Validator
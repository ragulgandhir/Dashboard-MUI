const Helpers = require('../../libs/helpers')

class Validator {
  constructor() {
    this.helpers = new Helpers()
  }
   
  categoryValidation (data) {
    const errors = []
    if (data) {
      const {
        categoryName,
        categoryDescription
      } = data
      if (!categoryName) {
        errors.push('CATEGORY_NAME_IS_REQUIRED')
      }
      if (!categoryDescription) {
        errors.push('CATEGORY_DESCRIPTION_IS_REQUIRED')
      }
      return errors
    }
    return ['INVALID_DATA']
  }
}

module.exports = Validator
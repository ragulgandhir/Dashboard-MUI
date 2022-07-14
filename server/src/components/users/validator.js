const Helpers = require('../../libs/helpers')

class Validator {
  constructor() {
    this.helpers = new Helpers()
  }
   
  userValidation (data) {
    const errors = []
    if (data) {
      const {
        name,
        email,
        password,
        address,
        mobileNumber,
      } = data
      if (!name) {
        errors.push('NAME_IS_REQUIRED')
      }
      if (!this.helpers.isValidEmail(email)) {
        errors.push('EMAIL_INVALID')
      }
      if (!password) {
        errors.push('PASSWORD_IS_REQUIRED')
      }
      if (!this.helpers.isValidMobileNumber(mobileNumber)) {
        errors.push('MOBILE_NUMBER_INVALID')
      }
      if (!address) {
        errors.push('ADDRESS_IS_REQUIRED')
      }
      return errors
    }
    return ['INVALID_DATA']
  }
}

module.exports = Validator
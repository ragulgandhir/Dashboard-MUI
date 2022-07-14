const mongoose = require('mongoose')
const REGEX = {
    EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    MOBILE: /^[0-9 +-]{6,16}$/
}

class Helpers {
 
    isValidMongooseId(id) {
        return mongoose.Types.ObjectId.isValid(id)
    }

    isValidEmail (email) {
        return REGEX.EMAIL.test(email)
      }
    
    isValidMobileNumber (value) {
        return REGEX.MOBILE.test(value)
    }
}
module.exports = Helpers
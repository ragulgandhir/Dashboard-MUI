const { RES_CODES, RES_STATUS, RES_MSG } = require('../../libs/constants')

class Controller {

  sendSuccessResponse (res, message, data) {
    res.status(RES_CODES.SUCCESS).json({
      status: RES_STATUS.SUCCESS,
      code: RES_CODES.SUCCESS,
      message,
      data: data || {}
    })
  }

  sendErrorResponse (res, message) {
    res.status(RES_CODES.BAD_REQUEST).json({
      status: RES_STATUS.ERROR,
      code: RES_CODES.BAD_REQUEST,
      message: message || RES_MSG.BAD_REQUEST
    })
  }

  sendValidationError (res, message, errors) {
    res.status(RES_CODES.BAD_REQUEST).json({
      status: RES_STATUS.ERROR,
      code: RES_CODES.BAD_REQUEST,
      message: message || RES_MSG.VALIDATION_ERROR,
      errors: errors || []
    })
  }

  sendServerError (res, e) {
    res.status(RES_CODES.SERVER_ERROR).json({
      status: RES_STATUS.ERROR,
      code: RES_CODES.SERVER_ERROR,
      message: RES_MSG.SERVER_ERROR,
      errors: e || ''
    })
  }

}
module.exports = Controller
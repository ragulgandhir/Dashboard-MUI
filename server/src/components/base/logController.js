const { RES_CODES, RES_STATUS, RES_MSG } = require('../../libs/constants')
const winston = require('winston')
const currentDate = new Date()
const dateFormat = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate()

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss'
    }),
    winston.format.printf(info => ` ${[info.timestamp]}: ${info.level}: ${info.message}`)
  ),
  transports: [
    // new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/' + dateFormat + '-error.log' })
  ]
})

class logController {
  async errorLogger (res, err) {
    logger.error(err.stack)
    res.status(RES_CODES.SERVER_ERROR).json({
        status: RES_STATUS.ERROR,
        code: RES_CODES.SERVER_ERROR,
        message: RES_MSG.SERVER_ERROR,
        errors: err.message || ''
    })
  }
}
module.exports = logController
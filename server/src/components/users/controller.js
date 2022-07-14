const BaseController = require('../base/controller')
const Validator = require('./validator')
const Services = require('./services')
const Formatter = require('./formatter')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Helpers = require('../../libs/helpers')
const logController = require('../base/logController')
const jwtKey = process.env.JWT_KEY
const jwtExprieTime = process.env.JWT_EXPIRE_TIME
class Controller extends BaseController {
  constructor () {
    super()
    this.validator = new Validator()
    this.userService = new Services()
    this.formatter = new Formatter()
    this.helpers = new Helpers()
    this.logController = new logController
  }

  async registerUser(req, res) {
    try {
      const error = this.validator.userValidation(req.body)
      if (error && error.length) {
        this.sendValidationError(res,'Validation error', error)
      } else {
        const formattedData = this.formatter.formatRegisterData(req.body)
        formattedData.password = await bcrypt.hash(formattedData.password, 8)
        const result = await this.userService.registerUser(formattedData)
        if (result && result._id) {
          this.sendSuccessResponse(res,'Successfully registered', result)
        } else {
          this.sendErrorResponse(res,'Registration failed')
        }
      }
    } catch (e) {
      this.logController.errorLogger(res, e)
    }
  }

  async userLogin(req, res) {
    // console.log('eqwwqtreyteryh')
    try {
      const {
        email,
        password
      } = req.body
      if (email && password) {
        const user = await this.userService.getUser({ email: email })
        if (user && user._id) {
          if (user.status === 'ACTIVE') {
            const valid = await bcrypt.compare(password, user.password)
            if (valid) {
              const payload = {
                name: user.name,
                email: user.email,
                mobileNumber: user.mobileNumber,
                userId: user._id
              }
              const token = jwt.sign(
                payload,
                jwtKey,
                { expiresIn: jwtExprieTime }
              )
              this.sendSuccessResponse(res,'Login success', { token: token })
            } else {
              this.sendErrorResponse(res,'Authentication failed')
            }
          } else {
            this.sendErrorResponse(res,'Authentication failed')
          }
        } else {
          this.sendErrorResponse(res,'Record not found in given email id')
        }
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    } 
  }

  async getUser(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const user = await this.userService.getUser({ _id: id })
        if (user && user._id) {
          const userProfile = this.formatter.formatUserForResponse(user)
          this.sendSuccessResponse(res,'User record', userProfile)
        } else {
          this.sendErrorResponse(res,'Record not found in given id')
        }
      } else {
        this.sendErrorResponse(res,'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const user = await this.userService.getUser({ _id: id })
        if (user && user._id) {
          const updateData = this.formatter.formatUpdate(req.body)
          const updated = await this.userService.updateUser({ _id: id }, updateData)
          if (updated) {
            this.sendSuccessResponse(res,'Updated successfully')
          }
        } else {
          this.sendErrorResponse(res,'User not found')
        }
      } else {
        this.sendErrorResponse(res,'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const user = await this.userService.getUser({ _id: id })
        if (user && user._id) {
          const deleted = await this.userService.deleteUser(id)
          if (deleted) {
            this.sendSuccessResponse(res,'Deleted successfully')
          }
        } else {
          this.sendErrorResponse(res,'User not found')
        }
      } else {
        this.sendErrorResponse(res,'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

}
module.exports = Controller
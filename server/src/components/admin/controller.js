const BaseController = require('../base/controller')
const Service = require('../admin/services')
const UserService = require('../users/services')
const jwt = require('jsonwebtoken')
const Helpers = require('../../libs/helpers')
const logController = require('../base/logController')
const jwtKey = process.env.JWT_KEY
const jwtExprieTime = process.env.JWT_EXPIRE_TIME

class Controller extends BaseController{
  constructor() {
    super()
    this.adminserice = new Service()
    this.userService = new UserService()
    this.logController = new logController()
  }

  async adminLogin(req, res) {
    // console.log("sucessss",req.body)
    try {
      const {
        email,
        password
      } = req.body
      if (email && password) {
        const record = await this.adminserice.getAdmin({ email: email, password: password })
        if (record && record._id) {
          const payload = {
            name : record.name,
            email : record.email,
            id: record._id,
            role: 'admin'
          }
          const token = jwt.sign(
            payload,
            jwtKey,
            { expiresIn: jwtExprieTime }
          )
          const users = await this.userService.getUsers()
          this.sendSuccessResponse(res, 'Login Success', { token: token, userList: users })
        } else {
          this.sendErrorResponse(res,'Authentication Failed')
        }
      } else {
        this.sendErrorResponse(res,'Invalid Data')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

  async userApprove(req, res) {
    try {
      const { userId } = req.params
      const updateData = {
        status: 'ACTIVE'
      }
      const updated = await this.userService.updateUser({ _id: userId }, updateData)
      if (updated) {
        this.sendSuccessResponse(res, 'Approved successfully', { userId : userId })
      } else {
        this.sendErrorResponse(res,'Failed to approved')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  } 
}
module.exports = Controller
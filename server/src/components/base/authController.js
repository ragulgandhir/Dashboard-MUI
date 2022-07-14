const BaseController = require('./controller')
const { ADMIN_ROLES } = require('../../libs/constants')
const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_KEY

class AuthController extends BaseController  {
  authCheck (req, res, next) {
    const headers = req.headers
    if (headers['x-authtoken']) {
      const token = headers['x-authtoken']
      try {
        const decoded = jwt.verify(token, jwtKey)
        req.userData = decoded
        next()
      } catch (e) {
        if (e && e.name === 'TokenExpiredError') {
          this.sendErrorResponse(res,'Token Expired')
        } else {
          this.sendErrorResponse(res,'Token Invalid')
        }
      } 
    } else {
      this.sendErrorResponse(res,'Token Invalid')
    }
  }

  isAdmin (req, res, next) {
    const userData = req.userData
    if (userData && ADMIN_ROLES.includes(userData.role)) {
      if (userData.role) {
        next()
      } else {
        this.sendForbiddenResponse(res)
      }
    } else {
      this.sendUnauthoizedResponse(res)
    }
  }
}
module.exports = AuthController

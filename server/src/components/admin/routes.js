const express = require('express')
const router = express.Router()
const AdminController = require('./controller')
const AuthController = require('../base/authController')

const controller = new AdminController()
const authController = new AuthController()

router.route('/login').post(controller.adminLogin.bind(controller))

router.route('/approve/:userId').get(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    controller.userApprove.bind(controller)
)

module.exports = router
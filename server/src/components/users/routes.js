const express = require('express')
const router = express.Router()
const UsersController = require('./controller')
const AuthController = require('../base/authController')

const controller = new UsersController()
const authController = new AuthController()

router.route('/register').post(controller.registerUser.bind(controller))

router.route('/login').post(controller.userLogin.bind(controller))

router.route('/details/:id').get(authController.authCheck.bind(authController), controller.getUser.bind(controller))

router.route('/update/:id').put(authController.authCheck.bind(authController), controller.updateUser.bind(controller))

router.route('/delete/:id').delete(authController.authCheck.bind(authController), controller.deleteUser.bind(controller))

module.exports = router
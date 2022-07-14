const express = require('express')
const router = express.Router()
const CategoriesController = require('./controller')
const AuthController = require('../base/authController')
const uploadfile = require('../base/imageController')

const controller = new CategoriesController()
const authController = new AuthController()

router.route('/add').post(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    uploadfile,
    controller.addCategory.bind(controller)
)

router.route('/details/:id').get(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    controller.getCategory.bind(controller)
)

router.route('/update/:id').put(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    uploadfile,
    controller.updateCategory.bind(controller)
)

router.route('/delete/:id').delete(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    controller.deleteCategory.bind(controller)
)

module.exports = router
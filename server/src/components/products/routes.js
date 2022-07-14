const express = require('express')
const router = express.Router()
const ProductsController = require('./controller')
const AuthController = require('../base/authController')
const uploadfile = require('../base/imageController')

const controller = new ProductsController()
const authController = new AuthController()

router.route('/add').post(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    uploadfile,
    controller.addProduct.bind(controller)
)

router.route('/details/:id').get(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    controller.getProduct.bind(controller)
)

router.route('/update/:id').put(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    uploadfile,
    controller.updateProduct.bind(controller)
)

router.route('/delete/:id').delete(
    authController.authCheck.bind(authController),
    authController.isAdmin.bind(authController),
    controller.deleteProduct.bind(controller)
)

module.exports = router
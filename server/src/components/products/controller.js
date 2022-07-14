const BaseController = require('../base/controller')
const Validator = require('./validator')
const Services = require('./services')
const Formatter = require('./formatter')
const Helpers = require('../../libs/helpers')
const logController = require('../base/logController')

class Controller extends BaseController {
  constructor () {
    super()
    this.validator = new Validator()
    this.productService = new Services()
    this.formatter = new Formatter()
    this.helpers = new Helpers
    this.logController = new logController
  }

  async addProduct(req, res) {
    try {
      const error = this.validator.productValidation(req.body)
      if (error && error.length) {
        this.sendValidationError(res,'Validation error', error)
      } else {
        if(!Array.isArray(req.body.color) && !Array.isArray(req.body.price)) {
         var colorArr = req.body.color.split(',')
         var priceArr = req.body.price.split(',')
        }
        let variants = []
        if (colorArr && priceArr) {
          for (let i = 0; i < colorArr.length; i++) {
            variants[i] = {
              color : colorArr[i],
              price : priceArr[i]
            }
          }
        }
        const formattedData = this.formatter.productFormat(req.body)
        formattedData.variants = variants
        if(req.file) {
        formattedData.image = req.file.filename
        }
        const result = await this.productService.productAdd(formattedData)
        if (result && result._id) {
          this.sendSuccessResponse(res,'Product add successfully', result)
        } else {
          this.sendErrorResponse(res,'Product add failed')
        }
      }
    } catch (e) {
      this.logController.errorLogger(res, e)
    }
  }

  async getProduct(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const product = await this.productService.getProduct({ _id: id })
        if (product && product._id) {
          const productDetails = this.formatter.formatProductForResponse(product)
          this.sendSuccessResponse(res,'Product details', productDetails)
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

  async updateProduct(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const product = await this.productService.getProduct({ _id: id })
        if (product && product._id) {
          const updateData = this.formatter.productFormat(req.body)
          if(req.file) {
            updateData.image = req.file.filename
            }
          const updated = await this.productService.updateProduct({ _id: id }, updateData)
          if (updated) {
            this.sendSuccessResponse(res,'Updated successfully')
          }
        } else {
          this.sendErrorResponse(res,'Product not found')
        }
      } else {
        this.sendErrorResponse(res,'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const product = await this.productService.getProduct({ _id: id })
        if (product && product._id) {
          const deleted = await this.productService.deleteProduct(id)
          if (deleted) {
            this.sendSuccessResponse(res,'Deleted successfully')
          }
        } else {
          this.sendErrorResponse(res,'Product not found')
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
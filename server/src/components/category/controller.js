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
    this.categoryService = new Services()
    this.formatter = new Formatter()
    this.helpers = new Helpers
    this.logController = new logController()
  }

  async addCategory(req, res) {
    try {
      const error = this.validator.categoryValidation(req.body)
      if (error && error.length) {
        this.sendValidationError(res, 'Validation error', error)
      } else {
        const formattedData = this.formatter.categoryFormat(req.body)
        if(req.file) {
          formattedData.image = req.file.filename
        }
        const result = await this.categoryService.categoryAdd(formattedData)
        if (result && result._id) {
          this.sendSuccessResponse(res, 'Category add successfully', result)
        } else {
          this.sendErrorResponse(res, 'Category add failed')
        }
      }
    } catch (e) {
      this.logController.errorLogger(res, e)
    }
  }

  async getCategory(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const category = await this.categoryService.getCategory({ _id: id })
        if (category && category._id) {
          const categoryDetails = this.formatter.formatCategoryForResponse(category)
          this.sendSuccessResponse(res, 'Category details', categoryDetails)
        } else {
          this.sendErrorResponse(res, 'Record not found in given id')
        }
      } else {
        this.sendErrorResponse(res, 'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

  async updateCategory(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const category = await this.categoryService.getCategory({ _id: id })
        if (category && category._id) {
          const updateData = this.formatter.categoryFormat(req.body)
          if(req.file) {
            updateData.image = req.file.filename
          }
          const updated = await this.categoryService.updateCategory({ _id: id }, updateData)
          if (updated) {
            this.sendSuccessResponse(res, 'Updated successfully')
          }
        } else {
          this.sendErrorResponse(res, 'Category not found')
        }
      } else {
        this.sendErrorResponse(res, 'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params
      if (this.helpers.isValidMongooseId(id)) {
        const category = await this.categoryService.getCategory({ _id: id })
        if (category && category._id) {
          const deleted = await this.categoryService.deleteCategory(id)
          if (deleted) {
            this.sendSuccessResponse(res, 'Deleted successfully')
          }
        } else {
          this.sendErrorResponse(res, 'Category not found')
        }
      } else {
        this.sendErrorResponse(res, 'Invalid id')
      }
    } catch(e) {
      this.logController.errorLogger(res, e)
    }
  }
}
module.exports = Controller
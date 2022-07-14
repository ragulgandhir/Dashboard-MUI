const ProductModel = require('./model')
const moment = require('moment')

class Service {
  async productAdd (data) {
    const dataToSave = data
    dataToSave.createdAt = moment().utc().format()
    const product = new ProductModel(dataToSave)
    return product.save()
  }

  async getProduct (condition) {
    const product = await ProductModel.findOne(condition)
    return product
  }

  async updateProduct (condition, data) {
    const dataToUpdate = data
    dataToUpdate.updatedAt = moment().utc().format()
    return await ProductModel.updateOne(condition, dataToUpdate)
  }

  async deleteProduct (ids) {
    return await ProductModel.updateMany(
      { _id: { $in: ids } },
      { $set: { status: 'DELETED', deletedAt: moment().utc().format() } },
      { multi: true }
    )
  }
}
module.exports = Service
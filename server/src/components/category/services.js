const CategoriesModel = require('./model')
const moment = require('moment')

class Service {
  async categoryAdd (data) {
    const dataToSave = data
    dataToSave.createdAt = moment().utc().format()
    const category = new CategoriesModel(dataToSave)
    return category.save()
  }

  async getCategory (condition) {
    const category = await CategoriesModel.findOne(condition)
    return category
  }

  async updateCategory (condition, data) {
    const dataToUpdate = data
    dataToUpdate.updatedAt = moment().utc().format()
    return await CategoriesModel.updateOne(condition, dataToUpdate)
  }

  async deleteCategory (ids) {
    return await CategoriesModel.updateMany(
      { _id: { $in: ids } },
      { $set: { status: 'DELETED', deletedAt: moment().utc().format() } },
      { multi: true }
    )
  }
}
module.exports = Service
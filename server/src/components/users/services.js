const UserModel = require('./model')
const moment = require('moment')

class Service {
  async registerUser (data) {
    const dataToSave = data
    dataToSave.createdAt = moment().utc().format()
    const user = new UserModel(dataToSave)
    return user.save()
  }

  async getUser (condition) {
    const user = await UserModel.findOne(condition)
    return user
  }

  async updateUser (condition, data) {
    const dataToUpdate = data
    dataToUpdate.updatedAt = moment().utc().format()
    return await UserModel.updateOne(condition, dataToUpdate)
  }

  async deleteUser (ids) {
    return await UserModel.updateMany(
      { _id: { $in: ids } },
      { $set: { status: 'DELETED', deletedAt: moment().utc().format() } },
      { multi: true }
    )
  }

  async getUsers () {
    const condition = {
      status: { $ne : 'DELETED'}
    }
    const user = await UserModel.find(condition)
    return user
  }
}
module.exports = Service
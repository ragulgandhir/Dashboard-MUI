const AdminModel = require('./model')

class Service {

    async getAdmin(condition) {
        const admin = await AdminModel.findOne(condition)
        return admin
    }

}
module.exports = Service
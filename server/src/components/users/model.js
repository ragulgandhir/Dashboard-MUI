const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  mobileNumber: { type: String },
  address: { type: String},
  status: { type: String, enum: ['ACTIVE', 'PENDING'], default: 'PENDING' },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date }
})

const usersModel = mongoose.model('Users', userSchema)
module.exports = usersModel


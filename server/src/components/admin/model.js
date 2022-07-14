const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  status: { type: String, enum: ['ACTIVE', 'DELETED'], default: 'ACTIVE' },
  createdAt: { type: Date },
  updatedAt: { type: Date }
})

const adminModel = mongoose.model('Admin', adminSchema)
module.exports = adminModel


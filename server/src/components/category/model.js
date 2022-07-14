var mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: { type: String },
    categoryDescription: { type: String },
    image: { type: String },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    deletedAt: { type: Date }
})

const categoriesModel = mongoose.model('Category', categorySchema)
module.exports = categoriesModel


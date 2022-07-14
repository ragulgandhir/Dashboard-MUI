var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;
const productSchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    productName: { type: String },
    productDescription: { type: String },
    originalPrice: { type: SchemaTypes.Double },
    sellingPrice: { type: SchemaTypes.Double},
    stock: { type: Number },
    variants: { type: Array },
    image: { type: String },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    deletedAt: { type: Date }
})

const productsModel = mongoose.model('Product', productSchema)
module.exports = productsModel


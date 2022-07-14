class Formatter {
  productFormat (data) {
    const productData = {
      categoryId: data.categoryId || '',
      productName: data.productName || '',
      productDescription: data.productDescription || '',
      originalPrice: data.originalPrice || '',
      sellingPrice: data.sellingPrice || '',
      stock: data.stock || '',
      status: 'ACTIVE'
    }
    return productData
  }

  formatProductForResponse (data) {
    const formattedData = {}
    if(data.categoryId) formattedData.categoryId = data.categoryId
    if(data.productName) formattedData.productName = data.productName || ''
    if(data.productDescription) formattedData.productDescription = data.productDescription || ''
    if(data.originalPrice) formattedData.originalPrice = data.originalPrice || ''
    if(data.sellingPrice) formattedData.sellingPrice = data.sellingPrice || ''
    if(data.stock) formattedData.stock = data.stock || ''
    if(data.status) formattedData.status = data.status || 'ACTIVE'
    return formattedData
  }
}
module.exports = Formatter
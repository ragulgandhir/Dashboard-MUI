class Formatter {
  categoryFormat (data) {
    const categoryData = {
      categoryName: data.categoryName || '',
      categoryDescription: data.categoryDescription || '',
      status: 'ACTIVE'
    }
    return categoryData
  }

  formatCategoryForResponse (data) {
    const formattedData = {}
    if(data.categoryName) formattedData.categoryName = data.categoryName || ''
    if(data.categoryDescription) formattedData.categoryDescription = data.categoryDescription || ''
    if(data.status) formattedData.status = data.status || 'ACTIVE'
    return formattedData
  }

}
module.exports = Formatter
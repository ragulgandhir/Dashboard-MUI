class Formatter {
  formatRegisterData (data) {
    const userData = {
      name: data.name || '',
      email: data.email || '',
      password: data.password || '',
      mobileNumber: data.mobileNumber || '',
      address: data.address || '',
      status: 'PENDING'
    }
    return userData
  }

  formatUserForResponse (user) {
    const userProfile = {
      _id: user._id || '',
      name: user.name || '',
      email: user.email || '',
      mobileNumber: user.mobileNumber || '',
      address: user.address || '',
      status: user.status || ''
    }
    return userProfile
  }

  formatUpdate (data) {
    const formattedData = {}
    if(data.name) formattedData.name = data.name || ''
    if(data.mobileNumber) formattedData.mobileNumber = data.mobileNumber || ''
    if(data.email) formattedData.email = data.email || ''
    if(data.address) formattedData.address = data.address || ''
    return formattedData
  }
}

module.exports = Formatter
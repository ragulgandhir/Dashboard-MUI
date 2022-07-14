const express = require('express')
const fs = require('fs')
const router = express.Router()
const trimRequest = require('trim-request')

fs.readdir(__dirname, function (err, components) {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }
  components.forEach(function (component) {
    try {
      if (fs.existsSync(`${__dirname}/${component}/routes.js`)) {
        router.use(`/api/${component}`.toLowerCase(), trimRequest.all, require(`./${component}/routes`))
      }
    } catch (e) {
      console.log('error', e)
    }
  })
})

module.exports = router
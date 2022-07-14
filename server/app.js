require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const swaggerDocument = require('./src/swagger/main')
const swaggerUi = require('swagger-ui-express')
require('./src/config/database')
const cors = require("cors")

// CORS
const whitelist = ["http://localhost:3001"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// 
app.use(bodyParser.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', require('./src/components/index'))
app.use(express.static('public'))

// CORS 
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
  })

app.listen(`${process.env.PORT}`, function () {
  console.log('App listening on port ' + `${process.env.PORT}` + '!')
})

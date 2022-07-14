 const multer = require("multer")
const util = require("util")
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dest = `public/upload/${req.body.type}`
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest)
        } 
        cb(null, dest)
      },
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('image')

const uploadfile = util.promisify(upload);
module.exports = uploadfile;

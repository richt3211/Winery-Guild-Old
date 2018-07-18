const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = `./uploads/${req.params.id}`
        if (fs.existsSync(path)){
            console.log("file already exists")
        }
        else {
            fs.mkdirSync(path)
        }
        cb(null, `./uploads/${req.params.id}`)
    },
    filename: (req,file,cb) => {
        if (file.fieldname === 'logo') {
            cb(null, 'logo.jpg')
        }
        else if (file.fieldname ==='bgImg') {
            cb(null, 'background.jpg')
        }
    }
})

const upload = multer({storage: storage})
const userController = require('../controllers/user')
const adminController = require('../controllers/admin')

//userView
router.get('/', userController.getWineries) 
router.put('/', userController.editAllWineries)

router.get('/', wineryController.listWineries) //calling the right controller function for the get request
router.post('/', wineryController.addWinery) //calling the right controlelr function for the post request
router.put('/:id', upload.any(), wineryController.editWinery)
// router.post('/img', wineryController.addImg)



module.exports = router
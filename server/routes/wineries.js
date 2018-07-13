const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req,file,cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
const wineryController = require('../controllers/wineries')

router.get('/', wineryController.listWineries) //calling the right controller function for the get request
router.post('/', wineryController.addWinery) //calling the right controlelr function for the post request
router.put('/:id', upload, wineryController.editWinery)
// router.post('/img', wineryController.addImg)


module.exports = router
const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
    
        cb(null, './uploads')
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})
const wineryController = require('../controllers/wineries')

router.get('/', wineryController.listWineries) //calling the right controller function for the get request
router.post('/', wineryController.addWinery) //calling the right controlelr function for the post request
router.put('/:id', upload.array('images', 2), wineryController.editWinery)
// router.post('/img', wineryController.addImg)


module.exports = router
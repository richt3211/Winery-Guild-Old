const express = require('express')
const router = express.Router()
const templateController = require('../controllers/template')
const fileUpload = require('express-fileupload')
const wineryController = require('../controllers/wineries')

router.get('/', wineryController.listWineries) //calling the right controller function for the get request
router.get('/template', templateController.get)


router.post('/', wineryController.addWinery) //calling the right controlelr function for the post request


module.exports = router
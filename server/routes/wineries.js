const express = require('express')
const router = express.Router()
const wineryController = require('../controllers/wineries')

router.get('/', wineryController.listWineries) //calling the right controller function for the get request

router.post('/', wineryController.addWinery) //calling the right controlelr function for the post request



module.exports = router
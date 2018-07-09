const express = require('express')
const router = express.Router()
const templateController = require('../controllers/template')

router.post('/', templateController.post)
router.get('/', templateController.get)


module.exports = router
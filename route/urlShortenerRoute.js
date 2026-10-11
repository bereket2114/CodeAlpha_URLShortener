const express = require('express')
const router = express.Router()
const urlController = require('../controller/URL_Shortener_Controller')

router.get('/', urlController.getMainPage)
router.get('/:code', urlController.getShortUrl)
router.post('/api/shorten', urlController.postUrl)


module.exports = router
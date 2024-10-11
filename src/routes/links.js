const express = require('express')

const { getLinks, createLink,} = require('../controllers/links')

const router = express.Router()

router.get('/api/links', getLinks)
router.post('/api/links', createLink)

module.exports = router
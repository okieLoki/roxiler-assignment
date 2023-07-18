const express = require('express')
const router = express.Router()

const addDataController = require('../controllers/addDataController')

router.get('/', addDataController)

module.exports = router
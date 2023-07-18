const express = require('express')
const router = express.Router()

const getDataByMonth = require('../controllers/getDataController')

router.get('/', getDataByMonth)

module.exports = router
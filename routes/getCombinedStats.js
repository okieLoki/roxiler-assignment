const express = require('express')
const router = express.Router()

const combinedStatsController = require('../controllers/combinedStatsController')

router.get('/', combinedStatsController)

module.exports = router
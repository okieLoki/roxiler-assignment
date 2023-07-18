const express = require('express')
const router = express.Router()

const { monthlySale,
    getBarChartData,
    getPieChartData } = require('../controllers/getStatsController')

router.get('/sale', monthlySale)
router.get('/barchart', getBarChartData)
router.get('/piechart', getPieChartData)


module.exports = router
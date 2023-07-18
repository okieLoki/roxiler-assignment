//imports
require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const addDataRoute = require('./routes/addDataRoute')
const getDataRoute = require('./routes/getDataRoute')
const getStatsRoute = require('./routes/getStatsRoute')
const getCombinedStats = require('./routes/getCombinedStats')

//db connection
dbConnect()

//middleware
server.use(express.json())
server.use(cors())

//routes
server.use('/api/addData', addDataRoute)
server.use('/api/getData', getDataRoute)
server.use('/api/getStats', getStatsRoute)
server.use('/api/getCombinedStats', getCombinedStats)

//server listen
const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
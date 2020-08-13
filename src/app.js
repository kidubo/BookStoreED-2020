const express = require('express')
require('./db/mongoose')
const learnerRouter = require('../routers/learnerRouter')

const app = express()
const port = process.env.PORT || 2022

app.use(express.json())
app.use(learnerRouter)


app.listen(port, ()=>{
    console.log('server is up and running on port ' + port)
})
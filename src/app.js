const express = require('express')
const app = express()

const port = process.env.PORT || 2022

app.listen(port, ()=>{
    console.log('server is up and runing on port ' + port)
})
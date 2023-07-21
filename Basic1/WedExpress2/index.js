const express = require('express')
const path = require('path')
const router = require('./router/router')
const app = express()

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'/pubic')))

app.listen(8080,()=>{
    console.log("start port 8080")
})
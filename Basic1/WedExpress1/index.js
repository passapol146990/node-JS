const express = require('express')
const router = require('./router/myRouter')

const app = express()

// app.use((req,res)=>{
//     res.send("Hello Express.js")
// })

// app.get("/",(req,res)=>{
//     res.status(200)
//     res.type("text/html")
//     res.sendFile(indexPage)
// })

app.use(router)

app.listen(8080,()=>{
    console.log('start to port 8080')
})
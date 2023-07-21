const express = require('express')
const router = express.Router()
const path = require('path')



router.get("/",(req,res)=>{
    // const form = document.getElementById('form');
    console.log('form')
    res.status(200)
    res.type("text/html")
    res.sendFile(path.join(__dirname,"../wedpage/index.html"))
})
router.get("/product/:id",(req,res)=>{
    const id = req.params.id
    if(id === "1"){
        res.sendFile(path.join(__dirname,"../wedpage/product1.html"))
    }else if(id === "2"){
        res.sendFile(path.join(__dirname,"../wedpage/product2.html"))
    }else if(id === "3"){
        res.sendFile(path.join(__dirname,"../wedpage/product3.html"))
    }else{
        res.redirect("/")

        // res.status(404)
        // res.send("<h1>404 Not found</h1><br><a href='/'>home</a>")
    }
})


module.exports = router
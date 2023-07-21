const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    const data = [
        {name:"โน๊ตบุ๊ค" , price:35000 , image:"images/products/product1.png"},
        {name:" เสี้อแขนยาว" , price:2000 , image:"images/products/product2.png"},
        {name:"หูฟัง" , price:5000 , image:"images/products/product3.png"}
    ]
    res.render('index.ejs',{data:data})
})

router.get('/addform',(req,res)=>{
    res.render('form')
})


router.get('/manage',(req,res)=>{
    res.render('manage')
})

router.post('/insert',(req,res)=>{
    console.log(req.body);
    res.render('form')
})
module.exports = router
const express = require('express')
const router = express.Router()
const DATA1 = require('../models/datas') 

router.get('/',(req,res)=>{
    DATA1.find({}).then((data)=>{res.render('index',{data:data})})
})

// DATA1.find().exec((err,doc)=>{
//     res.render('index.ejs',{data:doc})
// })


    // DATA1.find({})
    // .then((data)=>{
    //     res.render('index.ejs',{data: data});
    // }).catch((err)=>{
    //     console.log(err);
    //     res.render('index.ejs');
    // });\
// บันทึกข้อมูล
router.post('/savedata',(req,res)=>{
    let data2 = new DATA1({
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary
    })
    DATA1.saveData(data2,(e)=>{
        if(e) console.log(e)
    })
    res.redirect('/')
})
// ลบข้อมูล
router.get('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    DATA1.findByIdAndDelete(req.params.id)
    .then(data=>{console.log('ลบข้อมูลเรียบร้อย',data)})
    .catch(err=>{console.log(err)})
    res.redirect('/')
})
// แก้ไขข้อมูล /////////////////////////////////
router.get('/edit/:id',(req,res)=>{
    console.log(req.params.id)
    DATA1.findOne({_id:req.params.id})
    .then(data =>{res.render('editform.ejs',{data:data})})
    .catch(err=>{res.redirect('/')})
})
router.post('/saveedit',(req,res)=>{
    // console.log(req.body)
    let newdata = {
        name:req.body.name,
        age:req.body.age,
        salary:req.body.salary
    }
    DATA1.findByIdAndUpdate(req.body.id,newdata)
    .then(dat => console.log('อัพเดตข้อมูลเรียบร้อย',dat))
    .catch(err => console.log(err))
    res.redirect('/')
})
///////////////////////////////////
// ค้นหาข้อมูล
router.get('/:id',(req,res)=>{
    DATA1.findOne({_id:req.params.id})
    .then(data => {console.log(data) })
    .catch(err => {console.log(err)})
    res.redirect('/')
})
module.exports = router
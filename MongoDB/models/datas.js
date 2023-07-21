// เรียกใช้ mongoose
const mongoose = require('mongoose');

// เชื่อมต่อ mongoose
mongoose.connect('mongodb://127.0.0.1:27017/dataDB1',{ useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err));

// กำหนดชนิดข้อมูล ฟิวใน mongoose
let dataSchema = mongoose.Schema({
    name:String,
    age:String,
    salary:Number
})
// สร้างโมเดล
let DATA1 = mongoose.model('data',dataSchema)   
// ส่งออก
module.exports = DATA1

// บันทึกข้อมูล
module.exports.saveData = function(model){
    model.save()
}


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
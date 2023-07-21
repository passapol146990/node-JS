const fs = require('fs')

const data = fs.readFileSync('module-fs-txt/input.txt','utf-8')
console.log(data)

const outputText = `node.js พัสพล ${data} OK time ${new Date()}`
fs.writeFileSync('module-fs-txt/output.txt', outputText)
console.log('เขียนไฟล์เสร็จเรียบร้อย')



fs.readFileSync('module-fs-txt/input.txt','utf-8',(err,data)=>{
    if(err) return console.log('เกิดข้อผิดพลาด',(err))
    console.log((data))
})
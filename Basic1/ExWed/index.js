const http = require('http')
const fs = require('fs')
const url = require('url')

const indexPage = fs.readFileSync(`${__dirname}/wedpage/index.html`,'utf-8')
const indexPage1 = fs.readFileSync(`${__dirname}/wedpage/product1.html`,'utf-8')
const indexPage2 = fs.readFileSync(`${__dirname}/wedpage/product2.html`,'utf-8')
const indexPage3 = fs.readFileSync(`${__dirname}/wedpage/product3.html`,'utf-8')

const server = http.createServer((req,res)=>{

    const {path,query} = url.parse(req.url,true)
    if( path === "/" || path ==="/home"){
        res.end(indexPage)
    }else{
        console.log("id = ",query.id)
        if(query.id === "1"){
            res.end(indexPage1)
        }else if(query.id === "2"){
            res.end(indexPage2)
        }else if(query.id === "3"){
            res.end(indexPage3)
        }else{
            res.writeHead(404)
            res.end("<h1>Not found</h1><br><a href='/home'>home</a>")
        } 
    }
})
server.listen(8080,'localhost',()=>{
    console.log("Start Host")
})
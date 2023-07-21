const http = require('http')

const server = http.createServer((req,res)=>{
    const html =`
    <h1>Hello world</h1>
    <p>Passapol</p>
    <button>ok</button>
    `
    res.write(html)
    res.end()
})
server.listen(8080,()=>{
    console.log("/////////////////////////////////")
    console.log("/// start server in port 8080 ///")
    console.log("/////////////////////////////////")
})  
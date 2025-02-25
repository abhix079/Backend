const http = require('http');
const server = http.createServer();

server.listen(8000,()=>{
    console.log("Listening to Request....");
})

server.on('request',(req,res)=>{
    res.end("Hello From server! ");
})

const http = require('http');
const fs = require('fs/promises');


const server= http.createServer(async(request,response)=>{
    const html=  await fs.readFile("index.html",'utf-8');
    response.end(html);
    console.log("A new request received: ");

});

server.listen(8000,()=>{
    console.log("Server started: ");

});
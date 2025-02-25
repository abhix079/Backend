const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('random.html','utf-8');
const server = http.createServer((req,res)=>{
    let path = req.url;
    if(path ==="/" || path.toLowerCase() ==="/home"){
        res.end(html.replace('{{%KutchBhi%}}',"You are in home page"));
    }
    else if(path.toLowerCase()==="/about"){
        res.end(html.replace('{{%KutchBhi%}}',"You are in about page"));
    }
    else{
        res.end("404 path not found");
    }
})
server.listen(8001,(err)=>{
    console.log("Server is running on port 8000");

})
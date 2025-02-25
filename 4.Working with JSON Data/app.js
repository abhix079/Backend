//Json stands for javascript object notation

const http = require('http');
const fs = require('fs');
const data=  JSON.parse(fs.readFileSync("product.json","utf-8"));

const server = http.createServer((req,res)=>{
    let url  = req.url;
    
    if(url='/user'){
        res.writeHead(200,{
            'Content-Type':'application/json'
        });
        res.end("Hell from server")
        console.log(data)
        
       
    }
})

server.listen(8000,(err)=>{
    try{

        if(err) throw err;
        console.log("Server has started on the port 8000");
    }
   
    catch(err){
        console.log("Server error :",err.message);
    }

})
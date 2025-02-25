
const http = require('http');
const fs = require('fs/promises');


const server= http.createServer((request,response)=>{
   let path = request.url;
   if(path==='/' || path.toLocaleLowerCase()==="/home"){
    response.end('You are in Home section');
   }
   else if(path.toLocaleLowerCase()==="/about"){
    response.end('You are in about section');
   } 
   else if(path.toLocaleLowerCase()==="/contact"){
    response.end('You are in contact section');
   }
   else{
    response.end("Error 404 , Page not found")  // this is called fallback route, if no route is matched it will be called
   }

});

server.listen(8000,()=>{
    console.log("Server started: ");

});

const http = require('http');
const fs = require('fs/promises');


const server= http.createServer(async(request,response)=>{
    const home = await fs.readFile("home.html","utf-8");
    const about = await fs.readFile("about.html","utf-8");
   let path = request.url;
   if(path==='/' || path.toLocaleLowerCase()==="/home"){
    response.writeHead(200,{
        'Content-Type':'text/html',

    })
    response.end(home);
   }
   else if(path.toLocaleLowerCase()==="/about"){
    response.writeHead(200);
    response.end(about);
   } 
   else if(path.toLocaleLowerCase()==="/contact"){
    response.writeHead(200);
    response.end('You are in contact section');
   }
   else{
    response.writeHead(404);
    response.end("Error 404 , Page not found")  // this is called fallback route, if no route is matched it will be called
   }

});

server.listen(8000,()=>{
    console.log("Server started: ");

});
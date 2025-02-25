//  CREATING A WEB SERVER.............
           
           // http api /method is used

const http = require('http');

// Step:1=> Create a server

const server=http.createServer((request,response)=>{   // http.createServer((parameter1,parameter2)=>{})
    response.end("Hello from the server"); // this will send a response to the browser 
    console.log("A new request received:");
    // console.log(request);


});

// Step:2=> Start the server

server.listen(8000,'127.0.0.1',()=>{// server.listen(portNumber, hostAddress,(callback Function)=>{})  in this case host is the local machine
    console.log("Server is started")

})    

 



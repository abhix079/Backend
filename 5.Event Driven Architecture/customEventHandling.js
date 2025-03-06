
const http = require('http');
const events = require('events');

const server = http.createServer();
server.listen(8000,()=>{
    console.log("Started the server");
})

let myEmitter = new events.EventEmitter(); // this is the constructor provide by the event class package

// myEmitter.on('userCreated',()=>{
//     console.log("New User Created");
// })=>

myEmitter.on('userCreated',(id,name)=>{
    console.log(`New user created with name ${name}  and id ${id}`);
})
myEmitter.on('userCreated',(id,name)=>{
    console.log(`User ${name}  of id ${id} is added to the database`);

})

myEmitter.emit('userCreated',101,"Abhishek");
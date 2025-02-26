const fs = require('fs');

console.log("Program has started");

//Strored in  1st phase
setTimeout(()=>{
    console.log("Timer callback executed");
},0);

//stored in 2nd phase

fs.readFile("file/txt",()=>{
    console.log("file read completed");
})
//stored in 3rd phase
setImmediate(()=>{
    console.log("Set immediate callback executed"); // it is expired before settimeout 
})
console.log("Program has ended");  
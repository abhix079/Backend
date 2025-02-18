const fs = require('fs');
const file=fs.readFileSync("read.txt",'utf-8');  //it return the content so it should be stored in variable
console.log(file);


const data = `this is the data to be written: \nWritten at: ${new Date()}`;
const write= fs.writeFileSync("write.txt",data);
console.log(write);



 



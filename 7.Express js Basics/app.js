
//IMporting package

const express = require('express');
const app = express();

const port = 3000;

//Creating a server
app.get('/',(req,res)=>{
    // res.status(200).send("Hello from the server");
    // res.status(200).send("<h1>Hello from the server</h1>"); // for sending html 
    

    //for sending json data as a response

    res.status(200).json({status:"success",message:"status successfully"});

})
app.listen(port,()=>{

    console.log(`Server started on port ${port}`);
}); 

const express = require('express');
const app= express();


const morgan = require('morgan');

const fs = require('fs');


let movies= JSON.parse(fs.readFileSync('./data/movies.json'));


//////////////////////////////////////////////////////////////////////////////////////
 //     CREATING CUSTOM MIDDLEWARE

 const logger =function(req,res,next){
    console.log("custom middleware called");
    next();
 }



 app.use(express.json())
 app.use(logger);
 app.use((req,res,next)=>{
    req.requestedAt = new Date().toUTCString();
    next();

 })
 app.use(morgan('dev'));

//READ.........
// Handling GET requests.....................................................................................................


app.get('/movies',(req,res)=>{
   
    res.status(200).json({   //this is call json -json formatting
        status:"success",
        requestedAt:req.requestedAt,
        count:movies.length,
        message:"Data retrieved successfully",
        // data:{
        //     movies:movies
        // }
        movies  
    })
     
})

//Creating server
const port = 3000;
app.listen(port,()=>{
    console.log(`Server satarted on port ${port}`);
})
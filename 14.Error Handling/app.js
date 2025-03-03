const express = require('express');
const app=express();




const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static('./public'));

app.all('*',(req,res,next)=>{
    res.status(404).json({
        status:"error",
        message:`cant find original link ${req.originalUrl}`
    })
})
module.exports= app;
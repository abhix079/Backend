const express = require('express');
// const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();

const jwt = require('jsonwebtoken');


// app.use(cookieParser());

// app.get("/hash",(req,res)=>{
//    bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash("meraPassword",salt,(err,hash)=>{
//         console.log(hash);
//     });
//    });

//    app.get("/", (req,res)=>{
//   bcrypt.compare("meraPassword","$2b$10$gfaT.hYnotl7iUv9HJ.jkOE/lcqyjKkrvVXRTeb3iRI2SbkBh82iy",(err,result)=>{
//     console.log(result);
//   })
   
//     res.send("working");

  
// });

app.get("/",(req,res)=>{
    let token=jwt.sign({email:"abhi@gmail.com"},"secretkey") ;
    res.cookie("token",token);

    console.log(token)
    res.send("done")

})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});
const express = require("express");
const app = express();

const userModel = require("./models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs"); // for ejs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/create",  (req, res) => {
  let { username, email, password, age } = req.body;

 bcrypt.genSalt(10,(err,salt)=>{
    // console.log(salt);
    bcrypt.hash(password,salt,async(err,hash)=>{
        // console.log(hash);
        let createdUser = await userModel.create({
               username,
               email,
               password:hash, 
               age,
             });

            let token= jwt.sign({email:user.email},"secretkeyhoga");
            res.cookie("token",token);
             res.send(createdUser);
    })


 })
 
});

//login
app.get("/login",(req,res)=>{
    res.render('login');

})


app.post("/login",async(req,res)=>{
   let user = await userModel.findOne({email:req.body.email});
   if(!user){
return res.send("Something Went wrong");
   }

//    console.log(user.password);
bcrypt.compare(req.body.password,user.password,(err,result)=>{
    // console.log(result);
    res.send("Yes you can login");
})

});
//lgout

app.get("/logout",(req,res)=>{
    res.cookie("token","") ;//simply token hta denge to logout ho jayega
    res.redirect("/");
})


app.listen(3001, () => {
  console.log("server is runing");
});

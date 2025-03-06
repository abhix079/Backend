const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authTestApp')
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.error("error");
})


const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
});

const userModel= mongoose.model("user",userSchema);
module.exports= userModel;
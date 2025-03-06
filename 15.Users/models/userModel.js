 const mongoose = require('mongoose');
 const validator= require('validator');


 //name ,email,pssword, confirm password, photo field
 const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please enter your name']

    },
   email:{
    type:String,
    required:[true,'Please enter your email'],
    unique:true,
    lowercase:true ,/// save krne se phle lowercase me kr dega
    validate:[validator.isEmail,'Please enter a valid email']

   },
   photo:String,
   password:{
    type:String,
    required:[true,'Please enter the password'],
    minlength:8
   },
   confirmPassword:{
    type:String,
    required:[true,'Please confirm your password']
   }



 })

 const User = mongoose.model('User',userSchema);  // creating user model

 module.exports= User;
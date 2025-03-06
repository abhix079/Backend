const mongoose = require('mongoose');
const dotenv= require('dotenv');

dotenv.config({path:'./.env'}); 
const app= require('./app');



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    // console.log(conn);
    console.log("db connection successful");

}).catch((err)=>{
    console.log("db error",err);
});

const   movieSchema= new mongoose.Schema({
   
    name:{
        type:String,
        required:[true,'Name is required field'],
        unique:true
    },
    description:String,
    duration:{
        type:Number,
        required:true
    },
    ratings:{
        type:Number,
        default:1.0,
    }
});
//creating model
const Movie= mongoose.model('Movie',movieSchema);

const testMovie= new Movie({
    name:"Die Hard",
    description:"Action movie",
    duration:139,
    ratings:4.5
});

testMovie.save() // it returns promise
.then(doc=>{
    console.log("saved",doc);
}).catch(err=>{
    console.log("error in saving",err);
})


const port = process.env.PORT ||3001;
app.listen(port,()=>{
    console.log("server is running on port "+port);
})
//Creating server

const app   =require('./customMiddleware');
const port = 3000;
app.listen(port,()=>{
    console.log(`Server satarted on port ${port}`);
})
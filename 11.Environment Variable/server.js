
const dotenv= require('dotenv');
dotenv.config({path:'./.env'});
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server startd on port ${port}`);
})
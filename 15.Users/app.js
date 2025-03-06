const express= require('express');
const morgan = require('morgan');
app.use(express.json())

const authRouter= require('./routes/authRouter');
let app= express();

app.use('/api/users',authRouter);








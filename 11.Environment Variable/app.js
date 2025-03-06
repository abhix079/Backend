const express = require('express');
const app = express();

console.log(app.get('env'));  
const morgan  = require('morgan');
app.use(morgan('dev'));

app.use(express.static('./public'))

module.exports = app;
const express= require('express');
const authController = require('./../controllers/authController');
const router= express.Router();


router.route('/signup').post(authController); // isme signup wal ahai

module.exports= router;
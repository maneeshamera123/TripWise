const express= require('express');
const path=require('path');
const { populate } = require('../models/UserRegisterSchema');
const route=express.Router();

route.get('/GuiderRegister',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../../views/GuiderRegister.html'));
});

route.get('/UserRegister',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../../views/UserRegister.html'));
});
route.get('/UserHome',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../../views/UserHome.html'));
});

module.exports = route;
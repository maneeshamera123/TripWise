const express= require('express');
const { appendFile } = require('fs');
const path=require('path');
const route=express.Router();




route.get('/GuiderLogin',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/GuiderLogin.html'));
});

route.get('/UserLogin',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/UserLogin.html'));
});


    module.exports = route;

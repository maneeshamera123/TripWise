const express= require('express');
const path=require('path');
const route=express.Router();

route.get('/GuiderProfile',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/GuiderProfile.html'));
});

route.get('/GuiderDashboard',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/GuiderDashboard.html'));
});

module.exports = route;
const express= require('express');
const path=require('path');
const route=express.Router();

route.post('/GuiderList',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/GuiderList.html'));
});



module.exports = route;
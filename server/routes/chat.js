const express= require('express');
const { appendFile } = require('fs');
const path=require('path');
const route=express.Router();




route.get('/Chat',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/Chat.html'));
});



    module.exports = route;

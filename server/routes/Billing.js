const express= require('express');
const { appendFile } = require('fs');
const path=require('path');
const route=express.Router();




route.get('/Billing',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'../../views/Billing.html'));
});

route.post('/Payment',(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../../views/Payment.html'));
});
route.post('/PaymentCheck',(req,res,next)=>{
   
    res.send("Payment Successfull!");
});

    module.exports = route;

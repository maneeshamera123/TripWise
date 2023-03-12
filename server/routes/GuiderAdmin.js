const express= require('express');
const path=require('path');
const route=express.Router();
const adminController=require('../controllers/GuiderAdmin'); 

route.get('/add-guider-product',adminController.getAddProduct);

route.post('/add-guider-product',adminController.postAddProduct);

module.exports = route;
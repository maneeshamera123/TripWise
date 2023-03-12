const express= require('express');
const path=require('path');
const route=express.Router();
const adminController=require('../controllers/UserAdmin'); 

route.get('/add-user-product',adminController.getAddProduct);

route.post('/add-user-product',adminController.postAddProduct);

module.exports = route;
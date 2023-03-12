const { populate } = require('../models/UserRegisterSchema');
const Product=require('../models/UserRegisterSchema');

exports.getAddProduct=(req,res,next)=>{
res.render('admin/edit-product',{
    pageTitle:'Add-user-Product',
    path:'/admin/add-user-product',
    editing:false
});
};

exports.postAddProduct=(req,res,next)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const password=req.body.password;
    const password2=req.body.password2;

const product=new Product({fname:fname,lname:lname,email:email,password:password});
if(password==password2){
product.save().then(result=>{
console.log("Created Product");
res.redirect('/UserHome');
}).catch(err=>{
    console.log(err);
});
}
else{
res.send("Password doesn't match! Please Try Again");
}
};
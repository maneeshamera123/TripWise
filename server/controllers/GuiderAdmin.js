const Product=require('../models/GuiderRegisterSchema');

exports.getAddProduct=(req,res,next)=>{
res.render('admin/edit-product',{
    pageTitle:'Add-Product',
    path:'/admin/add-guider-product',
    editing:false
});
};

exports.postAddProduct=(req,res,next)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const password=req.body.password;
    const language=req.body.language;
    const Age=req.body.Age;
    const MobileNo=req.body.MobileNo;
    const City=req.body.City;
    const State=req.body.State;
    const Country=req.body.Country;
    const About=req.body.About;
    const AadharNo=req.body.AadharNo;
    const PanNo=req.body.PanNo;

const product=new Product({fname:fname,lname:lname,email:email,password:password,language:language,Age:Age,MobileNo:MobileNo,City:City,State:State,Country:Country,AadharNo:AadharNo,PanNo:PanNo,About:About});

product.save().then(result=>{
console.log("Created Product");
res.redirect('/GuiderDashboard');
}).catch(err=>{
    console.log(err);
});

};
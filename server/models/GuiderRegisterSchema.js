const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const RegisterSchema= new Schema({
fname: String,
lname: String,
email: String,
password: String,
language: String,
Age: Number,
MobileNo: Number,
City: String,
State: String,
Country: String,
PanNo: String,
AadharNo: Number,
About: String
});

module.exports=mongoose.model('GuiderData',RegisterSchema);
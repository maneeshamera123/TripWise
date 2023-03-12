
const express= require('express');
const bodyparser=require('body-parser');
const app= express();
const path= require('path');
const mongoose=require('mongoose');


const GuiderList=require('./routes/GuiderList');
const Login=require('./routes/Login');
const Register=require('./routes/Register');
const Profile=require('./routes/Profile');
const UserAdmin=require('./routes/Useradmin');
const GuiderAdmin=require('./routes/GuiderAdmin');
const Chat=require('./routes/chat');
const Billing=require('./routes/Billing');

const schema=require('./models/UserRegisterSchema');
const schema1=require('./models/GuiderRegisterSchema');

app.use('/static',express.static('static'));

app.use(bodyparser.urlencoded({extended : false}));


app.use(GuiderList);
app.use(Login);
app.use(Register);
app.use(Profile);
app.use(UserAdmin);
app.use(GuiderAdmin);
app.use(Chat);
app.use(Billing);

app.get('/home',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    });


    app.post('/UserLogin', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: "plz fill the credentials" })
            }
    
    
            const userLogin = await schema.findOne({ email: email })
    
            if (!userLogin) {
                
                res.status(400).json({ error: "invalid credentials" })
            }
             else{
                if(userLogin.password===password){
                res.status(200).redirect('/UserHome')}
                else{
                    res.status(200).json({ message: "Wrong Password" })
                }
             }   
             
        }
        catch (err) {
            console.log(err);
        }
    });

    app.post('/GuiderLogin', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: "plz fill the credentials" })
            }
    
    
            const userLogin = await schema1.findOne({ email: email })
    
            if (!userLogin) {
                
                res.status(400).json({ error: "invalid credentials" })
            }
             else{
                if(userLogin.password===password){
                res.status(200).redirect('/GuiderDashboard')}
                else{
                    res.status(200).json({ message: "Wrong Password" })
                }
             }   
             
        }
        catch (err) {
            console.log(err);
        }
    });

app.use((req,res,next)=>{
    res.status(404).send('<html><body><h1>Page not found</h1></body></html>');
});

mongoose.connect('mongodb+srv://awasthiparas6:Paras123@cluster0.cqcraga.mongodb.net/User?retryWrites=true&w=majority').then(result =>{
console.log("connected!");
app.listen(3000);
}).catch(err=>{console.log(err)});



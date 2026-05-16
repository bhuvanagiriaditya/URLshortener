const express=require('express');
const app=express();
const {connectMongoDb}=require('./connection');
const approutes=require("./routes/url-routes");
const URL=require('./models/url');
const redirectURL = require('./routes/staticRoutes');
const login=require('./routes/login');
const signUp=require('./routes/signup');
const port=8080;
const path=require('path');
const cookieParser = require('cookie-parser');
const {restricToLogin}=require('./middlewares/restrictToLogin')
const URl=require('./models/url');

 
connectMongoDb("mongodb://127.0.0.1:27017/urlshortner")
.then(() => {
    console.log("mongo is connected")

    
}).catch((err) => {
    console.log("error occured",err)
    
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/app', async (req, res) => {
    const allurls=await URl.find({});
    console.log(allurls.shortId)
   
  
    
   
    res.render('index',{
        
        urls:allurls,
    });
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/signup',(req,res)=>{
    res.render('signup');
})



app.use("/app",restricToLogin,approutes);
app.use("/redct",redirectURL);
app.use('/signup',signUp);
app.use('/login',login);



app.listen(port,()=>{
    console.log("server is started at 8080");
})


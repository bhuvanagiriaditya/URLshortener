const express=require('express');
const app=express();
const {connectMongoDb}=require('./connection');
const approutes=require("./routes/url-routes");
const URL=require('./models/url');
const redirectURL = require('./routes/staticRoutes');
const login=require('./routes/login');
const signUp=require('./routes/signup');
const port=8080;
 
connectMongoDb("mongodb://127.0.0.1:27017/urlshortner")
.then(() => {
    console.log("mongo is connected")

    
}).catch((err) => {
    console.log("error occured",err)
    
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views', './views');
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/signup',(req,res)=>{
    res.render('signup');
})



app.use("/app",approutes);
app.use("/redct",redirectURL);
app.use('/signup',signUp);
app.use('/login',login);



app.listen(port,()=>{
    console.log("server is started at 8080");
})


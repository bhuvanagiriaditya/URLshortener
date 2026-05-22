const express = require('express');
const app = express();

const { connectMongoDb } = require('./connection');

const approutes = require("./routes/url-routes");
const authorize = require('./routes/authorize')
const staticRoutes = require('./routes/staticRoutes');
const session = require("express-session");

const login = require('./routes/login');
const signUp = require('./routes/signup');

const path = require('path');
const cookieParser = require('cookie-parser');
const URl = require('./models/url');

const { restricToLogin, checkAuth } = require('./middlewares/restrictToLogin');

const port = 8080;

connectMongoDb("mongodb://127.0.0.1:27017/urlshortner")
    .then(() => {
        console.log("mongo is connected");
    })
    .catch((err) => {
        console.log("error occured", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        secret: "my-secret",
        resave: false,
        saveUninitialized: true,
    })
);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});
app.use('/', checkAuth, staticRoutes);


app.use("/app", restricToLogin, approutes);

app.use("/redct", staticRoutes);

app.use('/signup', signUp);
app.use('/login', login);
app.use("/upgrade", authorize)
app.listen(port, () => {
    console.log("server is started at 8080");
});
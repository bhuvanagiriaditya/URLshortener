const { getUsers } = require("../service");

async function restricToLogin(req, res, next) {
    const userid = req.cookies.uid;
    if (!userid){
        console.log("cookie not matched");
        return res.redirect('/login');

    } 
    const user = getUsers(userid);
    if (!user) {
        console.log("enter valid details")
        return res.redirect('/login');
    }

    req.user = user;
    next();

}
module.exports = {
    restricToLogin,
}
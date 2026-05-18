const { getUsers } = require("../service");

async function restricToLogin(req, res, next) {
    const userid = req.cookies?.uid;
    if (!userid) {

        return res.redirect('/login');

    }
    const user = await getUsers(userid);



    if (!user) {
        console.log("enter valid details")
        return res.redirect('/login');
    }


    req.user = user;
    next();

}
async function checkAuth(req, res, next) {
    const userid = req.cookies?.uid;

    const user = await getUsers(userid);







    req.user = user;
    next();

}
module.exports = {
    restricToLogin,
    checkAuth,
}
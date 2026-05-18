const Login = require('../models/signUp');
const { v4: uuidv4 } = require('uuid');
const {setUsers}=require('../service');

const handleLogin = async (req, res) => {
    
    try {
        const { email, password } = req.body;

        // Find user
        const user = await Login.findOne({ email, password });
        console.log(user)

        // If user not found
        if (!user) {
            return res.render('login');
        }
        const sessionid=uuidv4();
        setUsers(sessionid,user);
        res.cookie("uid",sessionid);


        // Success
        return res.status(200).redirect('/');

    } catch (e) {
        console.error(e);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = {
    handleLogin,
};
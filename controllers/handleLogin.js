const Login = require('../models/signUp');
const { v4: uuidv4 } = require('uuid');


const handleLogin = async (req, res) => {
    const uuId=uuidv4();
    try {
        const { email, password } = req.body;

        // Find user
        const user = await Login.findOne({ email, password });

        // If user not found
        if (!user) {
            return res.render('login');
        }

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
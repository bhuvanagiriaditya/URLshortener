const login = require('../models/signUp');
const { findOne } = require('../models/url');
const handleLogin = async (req, res) => {
    try {
        const {password,email}=req.body;
        await login.create({
            email,
            password,

        });
        const user=await findOne({password,email});
        if(!user) res.render('login');

       
        return  res.status(201).redirect('/app');
       

    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });

    }


};
module.exports={
    handleLogin,
}
const signup = require('../models/signUp');

const handlesignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Create user
        await signup.create({
            name,
            email,
            password,
        });

        // Redirect/render after successful signup
        return res.status(201).render('login');

    } catch (e) {

        if (e.code == 11000) {
            res.status(500).render("signup", {
                error: "Internal server error"
            });

        }
        else{
            res.status(500).json({msg:"internal server error"});
        }
      



    }
};


module.exports = { handlesignUp };
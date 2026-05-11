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

      

        console.error(e);

        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = { handlesignUp };
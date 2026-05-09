const signup=require('../models/signUp');
const handlesignUp=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        await signup.create({
            name,
            email,
            password,
            
        });
        res.status(201).render('login');

    }
    catch(e){
         console.error(e);
        res.status(500).json({ error: "Internal server error" });

    }
    

};
module.exports={handlesignUp};
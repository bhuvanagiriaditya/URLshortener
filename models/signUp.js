const mongoose=require('mongoose');
const signUpSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   email:{
    type:String,
    required:true,
    unique:true,
   },
   password:{
    type:String,
    required:true,

   }
})
const signup = mongoose.model('signup', signUpSchema);

module.exports = signup;
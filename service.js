const jwt=require('jsonwebtoken');
const secret="kadnssdmlkDklNDka:LND:LNDASK:NDAK:LU";

// set user
const setUsers = ( user) => {
    const payload={
        id:user._id,
        email:user.email,

    }
    return jwt.sign(payload,secret);

}

// get user
const getUsers = (token) => {
    if(!token) return null;
  return jwt.verify(token,secret);
};
module.exports={
    setUsers,
    getUsers,
}
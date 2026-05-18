const map = new Map();

// set user
const setUsers = (id, user) => {
    console.log(map.set(id,user));
   return  map.set(id, user);
};

// get user
const getUsers = (id) => {
    console.log(map.get(id));
    return map.get(id);
};
module.exports={
    setUsers,
    getUsers,
}
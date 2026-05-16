const map = new Map();

// set user
const setUsers = (id, user) => {
    map.set(id, user);
};

// get user
const getUsers = (id) => {
    return map.get(id);
};
module.exports={
    setUsers,
    getUsers,
}
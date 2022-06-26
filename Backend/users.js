const users = [];

const addUser = ({ id, name, room}) =>{
    name = name.trin().toLowerCase();
    room = room.trin().toLowerCase();


    const existingUser = user.find((user) => user.room== room && user.name ==name);

    if (!home || !room) return {error: 'username and room required!'};
    if (existingUser) return {error: 'This Username is already Taken for this room'};

    const user ={ id, name, room};
    users.push(user);

    return{user};
}

const removeUser = (id) => {
    const index = findIndex((user) => user.id ===id);
    if (index !== -1) return users.splice(index,1)[0];
}

const getUser = (id) => users.find((user) => user.id ===id); 
const getUserInRoom =(room) => users.filter((user.room === room));

module.exports = (addUser, removeUser, getUser, getUserInRoom);
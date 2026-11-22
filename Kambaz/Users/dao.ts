import { v4 as uuidv4 } from "uuid";

export default function UsersDao(db) {
  const users = db.users;

  const findUserByCredentials = (username, password) =>
    users.find((user) => user.username === username && user.password === password);

  const findUserByUsername = (username) =>
    users.find((user) => user.username === username);

  const createUser = (user) => {
    const newUser = {
      ...user,
      _id: uuidv4(),
    };
    users.push(newUser);
    return newUser;
  };

  const findUserById = (userId) =>
    users.find((user) => user._id === userId);

  const updateUser = (userId, user) => {
    const index = users.findIndex((item) => item._id === userId);

    if (index !== -1) {
      users[index] = { ...users[index], ...user, _id: userId };
    }

    return users[index];
  };

  return {
    findUserByCredentials,
    findUserByUsername,
    createUser,
    findUserById,
    updateUser,
  };
}

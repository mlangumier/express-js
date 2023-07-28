const getUsers = "SELECT * FROM users";
const createUser =
  "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;";

export default {
  getUsers,
  createUser,
};

import bcrypt from "bcrypt";

import pool from "../../database/db.js";
import queries from "./queries.js";

const getUsers = async (req, res) => {
  try {
    const users = await pool.query(queries.getUsers);

    res.json({ users: users.rows });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(queries.createUser, [
      username,
      email,
      hashedPassword,
    ]);

    res.json({ users: newUser.rows[0] });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default { getUsers, createUser };

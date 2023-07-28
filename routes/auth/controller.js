import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import jwtTokens from "../../utils/jwt-helpers.js";
import pool from "../../database/db.js";
import queries from "./queries.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const users = await pool.query(queries.login, [username]);

    // Check if user exists
    if (users.rows.length === 0) {
      return res.status(401).json({ message: "Username incorrect." });
    }

    // Check if hashed password corresponds
    const passwordIsValid = await bcrypt.compare(
      password,
      users.rows[0].password
    );
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Return JwtTokens if user is valid
    const tokens = jwtTokens(users.rows[0]);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });

    res.json(tokens);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;

    if (refreshToken === null)
      return res.status(401).json({ message: "Null refresh token" });

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) return res.status(401).json({ message: error.message });

        const tokens = jwtTokens(user);
        res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });

        res.json(tokens);
      }
    );
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res
      .status(200)
      .json({ message: "Logged out & refresh token deleted!" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default {
  login,
  refreshToken,
  logout,
};

import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // "Bearer TOKEN"
  const token = authHeader && authHeader.split(" ")[1]; // Get the "TOKEN" part of the bearer

  if (token === null) return res.status(401).json({ message: "Null token" });

  //   Check that token was created with this env
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).json({ message: error.message });

    // If ok, pass "user" into "req" to be available for our other routes
    req.user = user;
    next();
  });
}

export default authenticateToken;

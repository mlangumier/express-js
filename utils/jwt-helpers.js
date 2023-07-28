import jwt from "jsonwebtoken";

function jwtTokens({ id, username, email }) {
  const user = {
    id,
    username,
    email,
  };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60s", // usually 15-30mins
  });

  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "10m", // usually 14days
  });

  return { accessToken, refreshToken };
}

export default jwtTokens;

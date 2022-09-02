import jwt from "jsonwebtoken";

export const varifyToken = (req, res, next) => {
  // check if the token exist or not
  const token = req.cookies.access_token;
  console.log("token", token);
  if (!token) return res.status(401).send("You are not authenticated Anas");

  // Check if the token is valid or not
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(403).send("Token is not valid...!");
    req.user = user;
    next();
  });
};

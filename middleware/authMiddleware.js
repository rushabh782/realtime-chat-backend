const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    // Ensure token format is "Bearer <token>"
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ error: "Invalid token format" });
    }

    const decoded = jwt.verify(tokenParts[1], process.env.JWT_SECRET); // Ensure `JWT_SECRET` is correct in your `.env`
    req.user = decoded; // Attach decoded data (user) to the request
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

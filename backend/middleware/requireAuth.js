const jwt = require("jsonwebtoken");

// Authentication middleware to protect routes
const requireAuth = async (req, res, next) => {
  // const token = req.header("Authorization")?.replace("Bearer ", "");
  const token = req.headers.authorization?.split(" ")[1];
  // If no token is provided
  if (!token) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    console.log("Decoded token:", decoded);
    // Attach userId from the decoded token to the request object
    req.userId = decoded._id;
    next();
  } catch (err) {
    // If token is invalid or expired
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = requireAuth;

const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

// signup a user
const signupUser = async (req, res) => {
  const { email, password, name, confirmPassword } = req.body;

  try {
    // signup method I created earlier
    const user = await User.signup(email, password, name, confirmPassword);
    // create a token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use the static login method on the User model
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    // Send the response with user details and token
    res
      .status(200)
      .json({ email: user.email, name: user.name, _id: user._id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };

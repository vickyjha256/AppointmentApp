const userService = require('../Services/userService');
const {validationResult} = require("express-validator");

// Registration Controller.
exports.register = async (req, res) => {

  // Find the validation errors if any.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login Controller.
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const {user, token} = await userService.login(email, password);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout
exports.logout = (req, res) => {
  res.json({ message: 'Logged out successfully' });
};

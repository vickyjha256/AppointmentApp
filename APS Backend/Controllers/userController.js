const userService = require('../Services/userService');

// Get all users.
exports.getUsers = async (req, res) => {
  if(req.user.role != "Institute"){
    return res.status(401).send("Access Denied: Unauthorize Access");
  }

  try {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID.
exports.getUserById = async (req, res) => {
  if(req.user.role != "Institute"){
    return res.status(401).send("Access Denied: Unauthorize Access");
  }
  
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user by id.
exports.updateUser = async (req, res) => {
  if(req.user.role != "Institute"){
    return res.status(401).send("Access Denied: Unauthorize Access");
  }
  
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user by id.
exports.deleteUser = async (req, res) => {
  if(req.user.role != "Institute"){
    return res.status(401).send("Access Denied: Unauthorize Access");
  }
  
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

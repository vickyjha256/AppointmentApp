const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../Repositories/userRepository');

class UserService {
  async register(userData) {
    const user = await userRepository.findUserByEmail(userData.email);
    if (user) {
      throw new Error("User already exists with this email.");
    }

    const salt = await bcrypt.genSalt(10); // It will generate random salt every time it is called. So that
    const hashedPassword = await bcrypt.hash(userData.password, salt); // no users have same hashed password.

    const newUser = { ...userData, password: hashedPassword };

    return userRepository.createUser(newUser);
  }

  async login(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id, role: user.role }, 'RBAC_APP_WITH_FULL_SECURITY');
    return { user, token };
  }

  async getAllUsers() {
    return userRepository.getAllUsers();
  }

  async getUserById(id) {
    return userRepository.findUserById(id);
  }

  async updateUser(id, userData) {
    return userRepository.updateUser(id, userData);
  }

  async deleteUser(id) {
    return userRepository.deleteUser(id);
  }
}

module.exports = new UserService();
const User = require('../Models/User');

class UserRepository {
  async createUser(data) {
    return User.create(data);
  }

  async findUserById(id) {
    return User.findByPk(id);
  }

  async findUserByEmail(email) {
    return User.findOne({ where: { email } });
  }

  async getAllUsers() {
    return User.findAll();
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (user) {
      return user.update(data);
    }
    return null;
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (user) {
      return user.destroy();
    }
    return null;
  }
}

module.exports = new UserRepository();
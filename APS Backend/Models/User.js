const { DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM("Teacher", "Student", "Institute"),
    allowNull: false,
  },
});

module.exports = User;
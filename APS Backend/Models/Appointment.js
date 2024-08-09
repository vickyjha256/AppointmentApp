const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');
const User = require('./User');

const Appointment = sequelize.define('Appointment', {
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  date: { type: DataTypes.DATE, allowNull: false },
  time: { type: DataTypes.TIME, allowNull: false },
  confirmed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Appointment;

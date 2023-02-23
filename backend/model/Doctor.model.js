const { sequelize } = require("../config/db");
const { Sequelize } = require('sequelize');

const Doctor = sequelize.define('doctor', {
  doctorId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  departmentId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  specialization: {
    type: Sequelize.STRING,
    allowNull: false
  },
  availability: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  qualifications: {
    type: Sequelize.STRING,
    allowNull: false
  },
  experience: {
    type: Sequelize.STRING,
    allowNull: false
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
});

module.exports = Doctor;

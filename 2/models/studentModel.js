const { connection } = require("../database/connection");
const { Sequelize } = require("sequelize");

const student = connection.sequelize.define(
  "student",
  {
    firstName: {
      type: Sequelize.STRING(30),
      allowNull: false,
      minlength: 3,
      maxlength: 30,
    },
    lastName: {
      type: Sequelize.STRING(30),
      allowNull: false,
      minlength: 3,
      maxlength: 30,
    },
    gender: {
      type: Sequelize.ENUM("male", "female"),
      allowNull: false,

      enum: ["male", "female"],
    },
    studentCode: {
      type: Sequelize.STRING(9),
      allowNull: false,
      unique: true,
      minlength: 9,
      maxlength: 9,
      validate: {
        is: /^[1-9]\d{8}$/i,
      },
    },
  },
  {
    timestamps: true,
    tableName: "students",
  }
);

module.exports = { student };

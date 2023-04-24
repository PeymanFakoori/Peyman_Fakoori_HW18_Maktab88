const { connection } = require("../database/connection");
const { Sequelize } = require("sequelize");
const Food = connection.sequelize.define(
  "Food",
  {
    foodName: {
      type: Sequelize.STRING(30),
      allowNull: false,
      minlength: 2,
      maxlength: 30,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "Foods",
  }
);

module.exports = { Food };

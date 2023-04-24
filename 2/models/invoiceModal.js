const { connection } = require("../database/connection");
const { Sequelize } = require("sequelize");

const invoice = connection.sequelize.define(
  "invoice",
  {
    TrackingCode: {
      type: Sequelize.STRING(12),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    tableName: "invoices",
  }
);

module.exports = { invoice };

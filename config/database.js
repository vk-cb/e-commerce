const Sequelize = require("sequelize");

const sequelize = new Sequelize("e-comm", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "+05:30",
});

module.exports = sequelize;

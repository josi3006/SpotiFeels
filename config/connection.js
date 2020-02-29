
// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("tamedb", "root", "!@Galaxy", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

if (process.env.jawsdb_url) {
  connection = mysql.createConnection(process.env.jawsdb_url)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tamedb'
  });
}
// Exports the connection for other files to use
module.exports = sequelize;

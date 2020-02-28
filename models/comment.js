

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js/index.js");

// Creates a "comment" model that matches up with DB
var Comment = sequelize.define("comment", {
  name: Sequelize.STRING,
  mood: Sequelize.STRING,
  songtitle: Sequelize.STRING,
  comment:  Sequelize.STRING,
  created_at: Sequelize.DATE
});




// Syncs with DB
Comment.sync();

// Makes the comment Model available for other files (will also create a table)
module.exports = Comment;

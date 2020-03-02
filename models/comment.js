
// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");


// Creates a "comment" model that matches up with DB
var Comment = sequelize.define("comment", {
  name: Sequelize.STRING,
  mood: Sequelize.STRING,
  songtitle: Sequelize.STRING,
  // body:  Sequelize.STRING
});

// console.log(Comment);





// Syncs with DB
// Comment.sync();

// Makes the comment Model available for other files (will also create a table)

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("comment", {
    name: Sequelize.STRING,
    mood: Sequelize.STRING,
    songtitle: Sequelize.STRING,
    comment:  Sequelize.STRING,
    created_at: Sequelize.DATE
  });


  return Comment;
};

//This file allows users to create accounts by entering email address and a password.
//Neither fieled can be null. Also, this file validates input such as checking if the email is
// in proper email format, that the password is useable by the app, even when hashed,
// and finally, creates the account, including hashing the password.
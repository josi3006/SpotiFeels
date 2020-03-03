// Routes
// =============================================================


const Comment = require("../models/comment.js")

// Comment routes

module.exports = function(app) {

  // Get all comments

  app.get("/api/all", function(req, res) {

    // Finding all comments, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Comment.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log(results);
      });
  });

 
  app.post("/api/new", function(req, res) {

    console.log("Comment Data");
    console.log(req.body);

    Comment.create({
      name: req.body.name,
      mood: req.body.mood,
      songtitle: req.body.songtitle,
      body: req.body.commentBody,

    }).then(function(results) {
      // `results` here would be the newly created comment
      res.end();
    });

  });
}

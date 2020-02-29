// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
// Home route for home.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // concert route loads concert.html
  app.get("/concerts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/concerts.html"));
  });
//   comment route for comment
  app.get("/comment", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comment.html"));
  });
// comments route for concerts.html
  app.get("/comments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comments.html"));
  });


};

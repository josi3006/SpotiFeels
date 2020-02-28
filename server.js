var app = express();
var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Freedom123!",
  database: "tamedb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/api/all", function(req, res) {
  connection.query("SELECT * FROM comment;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { comment: data });
  });
});

app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM tameimpala where mood_id = ? ORDER BY RAND() LIMIT 1", [req.params.id], function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.log(data);
    res.render("single-quote", data[0]);
  });
});

app.post("/api/new", function(req, res) {
  connection.query("INSERT INTO comment (name, songtitle, comment) VALUES (?, ?, ?)", [req.body.name, req.body.songtitle, req.body.comment], function(
    err,
    result
  ) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }

    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
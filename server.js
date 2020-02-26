// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
const axios = require("axios");

// Requiring passport as we've configured it
var passport = require("./config/passport");
var testcommit = 'john';

console.log(testcommit);

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});






   


axios
  .get("https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&locale=*&countryCode=US")
  .then(function(res) {
    console.log(res.data._embedded.events[0]._embedded.venues[0].name);
    console.log(res.data._embedded.events[0]._embedded.venues[0].city.name);
    console.log(res.data._embedded.events[0]._embedded.venues[0].state.stateCode);
    console.log(res.data._embedded.events[0].dates.start.localDate);
    console.log(res.data._embedded.events[0].url);


  });









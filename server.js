// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
const axios = require("axios");
const comment = require("./models/comment")

// Requiring passport as we've configured it
// var passport = require("./config/passport");
var testcommit = 'Welcome to .Lucidity';

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



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars");


// Requiring our routes
// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});





// const concertArr = [];


// axios
//   .get("https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&latlong=37.5262816,-77.4490921&locale=*&sort=distance,asc")
//   .then(function (res) {

//     for (var i = 0; i < 5; i++) {

//       const concertBuild = [
//         { venue: res.data._embedded.events[i]._embedded.venues[0].name },
//         { city: res.data._embedded.events[i]._embedded.venues[0].city.name },
//         { state: res.data._embedded.events[i]._embedded.venues[0].state.stateCode },
//         { date: res.data._embedded.events[i].dates.start.localDate },
//         { tixURL: res.data._embedded.events[i].url }
//       ];

//       concertArr.push(concertBuild);

//     }



//     // renderArr(concertArr);

//   });



// $(document).ready(function renderArr(concertArr) {

//   $("#concert-section").append(concertArr);



//   console.log('---------------------------------');
//   console.log('Here\'s the array of concert info:');
//   console.log(concertArr);

// });








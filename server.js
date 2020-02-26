// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
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


// https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&postalCode=23221&radius=100&locale=*



var accessToken = "BQBQxCjBmMVAyLT4VX9CRNnQesmY5BwwmWsysBFimbng6MeTJIcDkEGmd_ClToARymd_BM11BGVWp63BUwepPYQHf6YMT4ILZYRykhp5kOGqUU-7odErZo2_ZzxD71HDreYeFVsZStjDMb8JEO4kfTO5OA6dEbdoZuc7c1C7qwOGG3D2eKdj0dY";
const fetch = require('node-fetch');



// $.ajax({
//   type:"GET",
//   url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI",
//   async:true,
//   dataType: "json",
//   success: function(json) {
//               console.log(json);
//               // Parse the response.
//               // Do other things.
//            },
//   error: function(xhr, status, err) {
//               // This time, we do not end up here!
//            }
// });





// console.log('Here i am');

https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI


// fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&locale=*', {

  fetch('https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI', {

  method: 'GET', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken 
  }
})

  .then(function (response) {
    return response.json()
  })

  .then(function (res2) {

  console.log('check it out:');
  console.log(res2);


  })

  .catch(function (error) {
    console.log(error);
  });









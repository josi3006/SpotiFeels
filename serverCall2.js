var express = require("express");
// express for routing with req.parmams = chocolate ----> http://localhost:8080/chocolate
var PORT = process.env.PORT || 8080;

var app = express();
// var accessToken = 'AQDsSqFeTXuKC52IAwgkP2jy_p4SncVerv6O3yB37ak2P6GZe0f102-UmSF164B4zp17_4WWzgrThfcSbl4po1X2UTBU2eGy9neqw55IT3P8e0EWZFgeY0vj1TUjJdrMhiw';
// const fetch = require('node-fetch');
// fetch('https://api.spotify.com/v1/me', {
//   headers: {'Authorization': 'Bearer ' + accessToken}
// }).then(response => response.json())
// .then(data => console.log(data))
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  accessToken: 'BQBInw2aynbPDbzL9epAuG3lrAR_CU5modKOeEBT08g-73ItwWTVNntq__hZY6sblJ9oL4N_drMVpXNCYLs'
});

// Do search using the access token
// spotifyApi.searchTracks('artist:Love').then(
//   function(data) {
//     console.log(data.body.items[0]);
//   },
//   function(err) {
//     console.log('Something went wrong!', err);
//   }
// );
// the code for Elvis
spotifyApi.getArtistAlbums(
  // ????specific artist id?????
  '43ZHCT0cAZBISjO8DG9PnE',
  { limit: 10, offset: 20 },
  function(err, data) {
    if (err) {
      console.error('Something went wrong!');
    } else {
      console.log(data.body);
    }
  }
);

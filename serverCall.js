
// express for routing with req.parmams = chocolate ----> http://localhost:8080/chocolate

//// does fetch even work?
// var accessToken = 'BQCqd0u40TC6Vbl9nbCQjXy9ukrJGEQi8yHaQhkP0P-rKNiA_2jB6u-EhWKN8T14TZscAWG8Sf18RtKNBPo';
 //const fetch = require('node-fetch');
// fetch('https://api.spotify.com/v1/searchq=roadhouse%20OR%20blues', {
//   headers: {'Authorization': 'Bearer ' + accessToken}
// }).then(response => response.json())
// .then(data => console.log(data))

// // possible url for playlist 'Mood Booster'
// https://.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0
// coping playlist ----->
var accessToken = "BQCDRaMP-_7-2emzzcDWYM5cHLtJvD3M9bzlQMflIuAy9vfphi7WW7hQ0u9C2Fw3nOz2pmNKGEz41INlppk";
const fetch = require('node-fetch');
fetch('https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DWVxpHBekDUXK',{
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })

        // just get the specific playlist id 
            .then((response) => {
                console.log(response.json().then(
                    (data) => { 
                        
                      // for(var i =0; i < data.tracks.items[0].track.artists.length; i++) {
                        var external_urls = [];
                        var song_Names = [];
                        var playlist_Obj = {};
                       // for (var i =0; i < data.tracks.items.length; i++){
                           //for (var i = 0; i < data.tracks.items[0].track.artists.length;i++){
                            //console.log(data.tracks.items[0].track.album.artists);
                            for (var i = 0; i < data.tracks.items.length; i++){
                                console.log(data.tracks.items[i].track.external_urls.spotify);
                                external_urls.push(data.tracks.items[i].track.external_urls.spotify);
                            }
   

                        for (var i = 0; i < data.tracks.items.length; i++){
                            console.log(data.tracks.items[i].track.name);
                            song_Names.push(data.tracks.items[i].track.name);

                            
                        }
                        var lengthPlaylist = song_Names.length;
                        for (var i =0 ; i < lengthPlaylist;i++){
                            playlist_Obj[song_Names[i]] = external_urls[i];
                        }
                        
                        // console.log(song_Names.length);
                        // console.log(external_urls.length);
                    //   for (var i = 0; i < song_Names.length;i++){
                    //     Object.assign(playlist_Obj, { song_Names[i]: external_urls[i] });
                    //   }
                       console.log(playlist_Obj);
                        
                         }
                    // console.log(data.tracks.items);
                ));
            });
// var $ = require("jquery");
// var SpotifyWebApi = require('spotify-web-api-node');
// var spotifyApi = new SpotifyWebApi({
//   accessToken: 'BQCqd0u40TC6Vbl9nbCQjXy9ukrJGEQi8yHaQhkP0P-rKNiA_2jB6u-EhWKN8T14TZscAWG8Sf18RtKNBPo'
// }); // ******* import the above when using the API call
// mood booster playlist id : 37i9dQZF1DX3rxVfibe1L0
// Do search using the access token
// spotifyApi
//   .getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
//   .then(function(data) {
//     return data.body.tracks.map(function(t) {
//       return t.id;
//     });
//   })
//   .then(function(trackIds) {
//     return spotifyApi.getTracks(trackIds);
//   })
//   .then(function(data) {
//     console.log(data.body);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });

//   // Get a playlist's description
// spotifyApi.getPlaylist('37i9dQZF1DX3rxVfibe1L0')
// .then(function(data) {
//   console.log('Some information about this playlist', data.body.description);

// }, function(err) {
//   console.log('Something went wrong!', err);
// });
// // I couldn't get my ajax to work
 // var accessToken = "BQDNoVVwbDQ01slrafiW9cyVn4KaaIoCYq7gB9D2mQj4JD_qbOEEuZcQOe3rucYtMVL-U9VXyPZfv_hcVeM";
// $.ajax({
//     url: 'https://api.spotify.com/v1/browse/new-releases',
//     type: 'GET',
//     data: 'name',
//     headers: {
//         'Authorization' : 'Bearer ' + accessToken
//     },
//     success: function(data) {
//         console.log(data);
//     }
// });

// var request = require("request");
// var playlistID = '37i9dQZF1DX3rxVfibe1L0';
// var token = "Bearer";
// request({url: "https://api.spotify.com/playlist/ + playlistID, headers: {"Authorization": token }, function(err, res){
// if (res){
//   var playlist = JSON.parse(res.body);
//   console.log("playlist: " + playlist.name);
//   console.log(playlist.tracks);
//   });
// }
// });




// the code for Elvis
// spotifyApi.getArtistAlbums(
//   // ????specific artist id?????
//   '43ZHCT0cAZBISjO8DG9PnE',
//   { limit: 10, offset: 20 },
//   function(err, data) {
//     if (err) {
//       console.error('Something went wrong!');
//     } else {
//       console.log(data.body);
      

//     }
    
//   }
// );



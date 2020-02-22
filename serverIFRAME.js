
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
var nameS = [];
        var urlIF = [];
        var uriIF = [];
        var iFrameURL = [];
        var iFrameObj = {};
var accessToken = "BQBGBAP5uIk-odLsfKMTesk3dMbsAKG4eohaksxsP5Oq3b8L0Wk5b5swiCZsl3ZLrIZITQKY8PHi0zs9daM";
const fetch = require('node-fetch');
fetch('https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DXdPec7aLTmlC',{
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
                        
// for (var i = 0; i < data.tracks.item.length; i++){
//     console.log(data.tracks.items[i].track);
// }
for (var i = 0 ; i < data.tracks.items.length; i++){
    console.log(data.tracks.items[i].track.album.external_urls.spotify);
    console.log(data.tracks.items[i].track.name);
nameS.push(data.tracks.items[i].track.name);
urlIF.push(data.tracks.items[i].track.album.external_urls.spotify);
uriIF.push(data.tracks.items[i].track.uri);


  //  data.tracks.items[i].track -----> track uri
//  spotify:track:1lGVyEkGHUz7Pg78QGaS4a

}
for (var i = 0; i < nameS.length; i++){
    var uriSplit = data.tracks.items[i].track.uri.toString();
var firstColon = uriSplit.indexOf(":");
var pickColon = uriSplit.substring(uriSplit.indexOf(":", firstColon + 1), uriSplit.length);

var firstSplit = data.tracks.items[i].track.album.external_urls.spotify.toString();
var pickCom = firstSplit.substring(0, firstSplit.indexOf("com") + 3) + "/embed/album" + firstSplit.substring((firstSplit.indexOf("com") + 9), firstSplit.length) + "?highlight=spotify:track" + pickColon;
iFrameURL.push(pickCom);
}
// console.log(pickCom);

for (var i = 0 ; i < nameS.length; i ++){
    iFrameObj[nameS[i]] = iFrameURL[i];
}

console.log(iFrameObj);






// // var uriSplit = data.tracks.items[0].track.uri.toString();
// // var firstColon = uriSplit.indexOf(":");
// // var pickColon = uriSplit.substring(uriSplit.indexOf(":", firstColon + 1), uriSplit.length);

// // var firstSplit = data.tracks.items[0].track.album.external_urls.spotify.toString();
// // var pickCom = firstSplit.substring(0, firstSplit.indexOf("com") + 3) + "/embed/album" + firstSplit.substring((firstSplit.indexOf("com") + 9), firstSplit.length) + "?highlight=spotify:track" + pickColon;
// // console.log(pickCom);
// // console.log(pickColon);
// // console.log(data.tracks.items[0].track.name);

// for (var i = 0; i < data.tracks.items.length; i++){
//     console.log(data.tracks.items[i].track.uri);
// }


//https://open.spotify.com/album/5sPC6RYCERdNCzHLRf9zHb
//spotify:track:1lGVyEkGHUz7Pg78QGaS4a


                       
                       // for (var i =0; i < data.tracks.items.length; i++){
                           //for (var i = 0; i < data.tracks.items[0].track.artists.length;i++){
                            //console.log(data.tracks.items[0].track.album.artists);
// // // // //                             for (var i = 0; i < data.tracks.items.length; i++){
// // // // //                                 console.log(data.tracks.items[i].track.external_urls.spotify);
// // // // //                                 external_urls.push(data.tracks.items[i].track.external_urls.spotify);
// // // // //                             }
   

// // // // //                         for (var i = 0; i < data.tracks.items.length; i++){
// // // // //                             console.log(data.tracks.items[i].track.name);
// // // // //                             song_Names.push(data.tracks.items[i].track.name);

                            
// // // // //                         }
// // // // //                         var lengthPlaylist = song_Names.length;
// // // // //                         for (var i =0 ; i < lengthPlaylist;i++){
// // // // //                             playlist_Obj[song_Names[i]] = external_urls[i];
// // // // //                         }
// // // // //                         // for (var i = 0; i <playlist_Obj.length;i++){
// // // // //                         //     controlList.push(playlist_Obj[song_Names[i]]);
                            
// // // // //                         // }
// // // // //                         // console.log(controlList);
                        
// // // // //                         // console.log(song_Names.length);
// // // // //                         // console.log(external_urls.length);
// // // // //                     //   for (var i = 0; i < song_Names.length;i++){
// // // // //                     //     Object.assign(playlist_Obj, { song_Names[i]: external_urls[i] });
// // // // //                     //   }
// // // // //                     // // // // // for ( var property in playlist_Obj ) {
// // // // //                     // // // // //     for ( var i = 0; i < song_Names.length ;i++){
// // // // //                     // // // // //     controlList.push(property.toString() + playlist_Obj[song_Names[i]] ); 
// // // // //                     // // // // // }
// // // // //                     // // // // // }

// // // // //                     // // // // // console.log(controlList); // 9800 items  I get songURL
// // // // //                         for (var i = 0; i < song_Names.length; i++){
// // // // //                             controlList.push(song_Names[i] + " " + playlist_Obj[song_Names[i]]);
// // // // //                                 // // // // ******SUCCESS***** 'All Comes Back To You https://open.spotify.com/track/4AkCyd9Nlbt8JprQq9V6o2'  <---- song name with url seperated by space
// // // // //                         }
// // // // //                         console.log(controlList.length); // showing length of songs in playlist
// // // // //                     // // ERROR the thing is not an array for splice method
// // // // //                       //  console.log(controlList[0].splice((controlList[0].indexOf("http") - 1), 1, "," ));
// // // // //                    // console.log(playlist_Obj[songs_Names[8]]);
// // // // //                 // // // // // //    console.log(controlList[0]);
// // // // //                 // // // // // //    console.log(controlList[0].substring(0,13)); // testing substring
// // // // //                 // // // // // //    console.log(controlList[0].substring(0, controlList[0].indexOf("https")));
// // // // //                 // // // // // //    console.log(controlList[0].indexOf("https")); // I think it would be minus one for position and then add one for replace
// // // // //                 // // // // // //    var convertReplace = controlList[0].toString();
// // // // //                 // // // // // //    var stringInsert = convertReplace.substring(0, convertReplace.indexOf("https") - 1) + "," + convertReplace.substring(convertReplace.indexOf("https"), convertReplace.length);
                                    
// // // // //                 // // // // // //     console.log(stringInsert); // not in array yet

// // // // //                     for (var i = 0; i < controlList.length; i++){
// // // // //                        var convertReplace = controlList[i].toString();
// // // // //                        var stringInsert = convertReplace.substring(0, convertReplace.indexOf("https") - 1) + "," + convertReplace.substring(convertReplace.indexOf("https"), convertReplace.length);
// // // // //                        pushedComma.push(stringInsert);
// // // // //                     }
// // // // // for (var i = 0; i< pushedComma.length;i++){
// // // // // var insert = pushedComma[i].toString();
// // // // // var stringThere =  insert.substring(0, insert.indexOf(",")) + "'" + insert.substring(insert.indexOf(","), (insert.indexOf(",")+1)) + "'" + insert.substring((insert.indexOf(",")+ 1), insert.length) ;
// // // // // foundMark.push(stringThere);
// // // // // }

// // // // // for (var i = 0; i <foundMark.length; i++){
// // // // //     var queryString = "INSERT INTO testT (name, url) VALUES" + "('"  + foundMark[i] + "')";
// // // // //     console.log(queryString);
// // // // // }


// // // // // //console.log(foundMark);

// // // // //  //var queryString = "INSERT INTO testT (name, url) VALUES" + "('"  + foundMark[0].toString() + "')";
// // // // //  //console.log(queryString);
// // // // // /////////////////////////////// SUCCESS
// // // // // // // // // // console.log(pushedComma[0].toString());
// // // // // // // // // // console.log(pushedComma[0].substring(0, pushedComma[0].indexOf(",")));
// // // // // // // // // // var str = pushedComma[0].toString();
// // // // // // // // // //  // right // // // ***** SUCCESS implemented the '
// // // // // // // // // // var insertHere = str.substring(0, str.indexOf(",") - 1) + "'" + str.substring(str.indexOf(","), (str.indexOf(",")+1)) + "'" + str.substring((str.indexOf(",")+ 2), str.length) ;//str.substring(0, str.indexOf("https") - 1) + "'" + str.substring(str.indexOf("https"), str.length);
// // // // // // // // // // // /// // /// // ///console.log(insertHere);
// // // // // // // // // // console.log(insertHere);


// // // // // // // // // // // console.log(pushedComma[0]); // <<------ it is HERE
// // // // // // // // // // // var str = pushedComma[0].toString();
// // // // // // // // // // // //////////////////////////////////////// **********SUCCESS********** got array with comma seperation
// // // // // // // // // // //                     // console.log("right obj" + playlist_Obj[song_Names[8]]);
// // // // // // // // // // // var queryString = "INSERT INTO testT (name, url) VALUES" + "('"  + str + "')";
// // // // // // // // // // // console.log(queryString); // must have the apostrophe beside stuff




// // // // //                     // // for ( var i = 0; i < controlList.length;i++){
// // // // //                     // //     controlList.splice(i, 0, playlist_Obj[song_Names[i]]);
                        
// // // // //                     // // }
// // // // //                     // // console.log(controlList);
// // // // //                     //   for ( var i = 0; i <controlList.length; i++){
// // // // //                     //       for (var j = 0; j <song_Names.length; i++){
// // // // //                     //           controlList.splice(i+1, 0, playlist_Obj[song_Names[i]]);
// // // // //                     //       }
// // // // //                     //   }
                     
// // // // //                     // // //  //  console.log(controlList);
// // // // //                     // // // // test below code out so insert into testT something shows up
                    
// // // // //                     // console.log(playlist_Obj[song_Names[0]]);

                    
// // // // //                     //   var stringifyObj = JSON.parse(playlist_Obj);
// // // // //                     //   var replaceObj = stringifyObj.replace(":", ".");
// // // // //                     //      console.log(replaceObj);
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



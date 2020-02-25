var accessToken = "BQD6xk10n4D0VPrs_r-msEddvpZPm0rl05TmgqhWHSq9bUTuyvPfrOHfz7pIMk0NSk5MWUSGGLUPCDiZLdg";
const fetch = require('node-fetch');

var rightArr = [];
var nameS = [];
        var urlIF = [];
        var uriIF = [];
        var iFrameURL = [];
        var iFrameObj = {};
        var pushedComma = [];
        var foundMark = [];
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




                        

                        ///////////////////////////////////////////////////////
                        // for (var i = 0; i <playlist_Obj.length;i++){
                        //     controlList.push(playlist_Obj[song_Names[i]]);
                            
                        // }
                        // console.log(controlList);
                        
                        // console.log(song_Names.length);
                        // console.log(external_urls.length);
                    //   for (var i = 0; i < song_Names.length;i++){
                    //     Object.assign(playlist_Obj, { song_Names[i]: external_urls[i] });
                    //   }
                    // // // // // for ( var property in playlist_Obj ) {
                    // // // // //     for ( var i = 0; i < song_Names.length ;i++){
                    // // // // //     controlList.push(property.toString() + playlist_Obj[song_Names[i]] ); 
                    // // // // // }
                    // // // // // }
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
                    for (var i = 0 ; i < nameS.length; i ++){
                        iFrameObj[nameS[i]] = iFrameURL[i];
                    }
                    // // // // // console.log(controlList); // 9800 items  I get songURL
                        for (var i = 0; i < nameS.length; i++){
                            rightArr.push(nameS[i] + " " + iFrameObj[nameS[i]]);
                                // // // // ******SUCCESS***** 'All Comes Back To You https://open.spotify.com/track/4AkCyd9Nlbt8JprQq9V6o2'  <---- song name with url seperated by space
                        }
                        console.log(rightArr.length); // showing length of songs in playlist
                    // // ERROR the thing is not an array for splice method
                      //  console.log(controlList[0].splice((controlList[0].indexOf("http") - 1), 1, "," ));
                   // console.log(playlist_Obj[songs_Names[8]]);
                // // // // // //    console.log(controlList[0]);
                // // // // // //    console.log(controlList[0].substring(0,13)); // testing substring
                // // // // // //    console.log(controlList[0].substring(0, controlList[0].indexOf("https")));
                // // // // // //    console.log(controlList[0].indexOf("https")); // I think it would be minus one for position and then add one for replace
                // // // // // //    var convertReplace = controlList[0].toString();
                // // // // // //    var stringInsert = convertReplace.substring(0, convertReplace.indexOf("https") - 1) + "," + convertReplace.substring(convertReplace.indexOf("https"), convertReplace.length);
                                    
                // // // // // //     console.log(stringInsert); // not in array yet

                    for (var i = 0; i < rightArr.length; i++){
                       var convertReplace = rightArr[i].toString();
                       var stringInsert = convertReplace.substring(0, convertReplace.indexOf("https") - 1) + "," + convertReplace.substring(convertReplace.indexOf("https"), convertReplace.length);
                       pushedComma.push(stringInsert);
                    }
for (var i = 0; i< pushedComma.length;i++){
var insert = pushedComma[i].toString();
var stringThere =  insert.substring(0, insert.indexOf(",")) + "'" + insert.substring(insert.indexOf(","), (insert.indexOf(",")+1)) + "'" + insert.substring((insert.indexOf(",")+ 1), insert.length) ;
foundMark.push(stringThere);
}

for (var i = 0; i <foundMark.length; i++){
    var queryString = "INSERT INTO testT (name, url) VALUES" + "('"  + foundMark[i] + "')";
    console.log(queryString);
}






}
                          
// console.log(data.tracks.items);
));
});
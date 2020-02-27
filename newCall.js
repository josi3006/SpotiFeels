var accessToken = "BQCDRaMP-_7-2emzzcDWYM5cHLtJvD3M9bzlQMflIuAy9vfphi7WW7hQ0u9C2Fw3nOz2pmNKGEz41INlppk";
const fetch = require('node-fetch');
fetch('https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DWVxpHBekDUXK',{
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })

        .then( function (response) {
            console.log(response.json())
        });




        // just get the specific playlist id 
            .then((response) => {
                // console.log(response.json().then(
                //     (data) => { 
                        
                //       // for(var i =0; i < data.tracks.items[0].track.artists.length; i++) {
                //         var external_urls = [];
                //         var song_Names = [];
                //         var playlist_Obj = {};
                //        // for (var i =0; i < data.tracks.items.length; i++){
                //            //for (var i = 0; i < data.tracks.items[0].track.artists.length;i++){
                //             //console.log(data.tracks.items[0].track.album.artists);
                //             for (var i = 0; i < data.tracks.items.length; i++){
                //                 console.log(data.tracks.items[i].track.external_urls.spotify);
                //                 external_urls.push(data.tracks.items[i].track.external_urls.spotify);
                //             }
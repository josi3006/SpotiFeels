
console.log('Whassup!');



$("#go-btn").on("click", function (event) {
    event.preventDefault();

    console.log('Inside button click');

    const queryURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&latlong=37.5262816,-77.4490921&locale=*&sort=distance,asc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});


function updatePage(res) {

    console.log('you clicked it!');


    // const concertArr = [];

    // const testvenues = [];

    // for (var i = 0; i < 5; i++) {

    const concertObject = {
         name: res._embedded.events[0]._embedded.venues[0].name,
         city: res._embedded.events[0]._embedded.venues[0].city.name,
         state: res._embedded.events[0]._embedded.venues[0].state.stateCode,
         date: res._embedded.events[0].dates.start.localDate,
         tixURL: res._embedded.events[0].url
    }

    

    // testvenues.push(eachVenue);



// console.log('this it????????????????????????');
// console.log(testvenues);


renderArr(concertObject);

};


function renderArr(concertObject) {

    var show = "<br><a href=" + concertObject.tixURL + ">";
    show += "<h3>" + concertObject.name + "</h3>";
    show += concertObject.city + ", ";
    show +=concertObject.state + "<br>";
    show +=concertObject.date + "</a>";
 


    $(".spotifySection").append(show);




    // for (var i = 0; i < 5; i++) {

    //     const concertBuild = [
    //         { venue: res._embedded.events[i]._embedded.venues[0].name },
    //         { city: res._embedded.events[i]._embedded.venues[0].city.name },
    //         { state: res._embedded.events[i]._embedded.venues[0].state.stateCode },
    //         { date: res._embedded.events[i].dates.start.localDate },
    //         { tixURL: res._embedded.events[i].url }
    //     ];

    //     concertArr.push(concertBuild);


    // console.log(testvenues);


};










// $("#go-btn").on("click", function (event) {

//     event.preventDefault();

//     console.log('you clicked it!');


//     const concertArr = [];


//     axios
//         .get("https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&latlong=37.5262816,-77.4490921&locale=*&sort=distance,asc")
//         .then(function (res) {

//             for (var i = 0; i < 5; i++) {

//                 const concertBuild = [
//                     { venue: res.data._embedded.events[i]._embedded.venues[0].name },
//                     { city: res.data._embedded.events[i]._embedded.venues[0].city.name },
//                     { state: res.data._embedded.events[i]._embedded.venues[0].state.stateCode },
//                     { date: res.data._embedded.events[i].dates.start.localDate },
//                     { tixURL: res.data._embedded.events[i].url }
//                 ];

//                 concertArr.push(concertBuild);

//             }



//             // renderArr(concertArr);




//             $(document).ready(function renderArr(concertArr) {

//                 $("#concert-section").append(concertArr);



//                 console.log('---------------------------------');
//                 console.log('Here\'s the array of concert info:');
//                 console.log(concertArr);

//             });

//         });


// });

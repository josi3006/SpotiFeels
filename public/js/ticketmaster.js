const axios = require("axios");


$("#go-btn").on("click", function (event) {

    event.preventDefault();

    console.log('you clicked it!');

    
    const concertArr = [];


    axios
        .get("https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&latlong=37.5262816,-77.4490921&locale=*&sort=distance,asc")
        .then(function (res) {

            for (var i = 0; i < 5; i++) {

                const concertBuild = [
                    { venue: res.data._embedded.events[i]._embedded.venues[0].name },
                    { city: res.data._embedded.events[i]._embedded.venues[0].city.name },
                    { state: res.data._embedded.events[i]._embedded.venues[0].state.stateCode },
                    { date: res.data._embedded.events[i].dates.start.localDate },
                    { tixURL: res.data._embedded.events[i].url }
                ];

                concertArr.push(concertBuild);

            }



            // renderArr(concertArr);




            $(document).ready(function renderArr(concertArr) {

                $("#concert-section").append(concertArr);



                console.log('---------------------------------');
                console.log('Here\'s the array of concert info:');
                console.log(concertArr);

            });

        });


});
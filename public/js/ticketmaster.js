

$("#go-btn").on("click", function (event) {
    event.preventDefault();


    const queryURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=iXu9lOdavOsqh6jwxD8dkn36Ify7D1MI&keyword=tame%20impala&latlong=37.5262816,-77.4490921&locale=*&sort=distance,asc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});


function updatePage(res) {



    const concertObject = {
         name: res._embedded.events[0]._embedded.venues[0].name,
         city: res._embedded.events[0]._embedded.venues[0].city.name,
         state: res._embedded.events[0]._embedded.venues[0].state.stateCode,
         date: res._embedded.events[0].dates.start.localDate,
         tixURL: res._embedded.events[0].url
    }


renderArr(concertObject);

};


function renderArr(concertObject) {

    var show = "<br><a href=" + concertObject.tixURL + ">";
    show += "<h3>" + concertObject.name + "</h3>";
    show += concertObject.city + ", ";
    show +=concertObject.state + "<br>";
    show +=concertObject.date + "</a>";
 

    $(".spotifySection").append(show);

};

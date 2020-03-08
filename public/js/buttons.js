
<<<<<<< HEAD
$(window).on("load", () => {
    // console.log($(".moodButton"));
    $(".moodButton").each(function () {
        // console.log(this);            |
        // this all needs to be changed  v
        $(this).on("click", function (event) {
            event.preventDefault();
            var mood = $(this).data("mood");
            console.log(mood);
            var queryString = "SELECT * FROM tameimpala WHERE mood_id = ?  ORDER BY Rand() LIMIT 1";
           
            // connection query needs to be defined
            connection.query(queryString, [mood], function (err, result) {
                if (err) throw err;
                cb(result);
                console.log(this)
            });
        });
    });
});


function (mood, cb) {
    $(".moodButtons").on("click", function (event) {
=======


$(function () {
    $(".moodBtn").on("click", function (event) {
>>>>>>> 9df43abec4d54a353a9261b42e232853c4450ed9
        event.preventDefault();

        var mood = $(this).data("mood");

        console.log('Mood is: ' + mood);

        var queryString = "SELECT * FROM tameimpala WHERE mood_id = " + mood + " ORDER BY Rand() LIMIT 1";

        console.log('query is: ' + queryString);


    })

});



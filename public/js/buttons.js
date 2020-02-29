<<<<<<< HEAD

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
=======
=======
>>>>>>> 1f9e307e93508424e31003bab4fbcae089b9548e
function (mood, cb) {
    $(".moodButtons").on("click", function (event) {
        event.preventDefault();
        var mood = $(this).data("mood");
    var queryString = "SELECT * FROM tameimpala WHERE mood_id = ? ORDER BY Rand() LIMIT 1";
    connection.query(queryString, [mood], function (err, result) {
        if (err) throw err;
        cb(result);
        console.log (mood);
    });
});
};

>>>>>>> c9cf2c9391d464014a5fbc90c03540648c243d19

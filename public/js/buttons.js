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


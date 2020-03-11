


$(function () {
    $(".moodBtn").on("click", function (event) {
        event.preventDefault();

        var mood = $(this).data("mood");

        console.log('Mood is: ' + mood);

    })

})



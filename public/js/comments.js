//  global moment 
// When user clicks add-btn
$("#post-comment").on("click", function(event) {
  event.preventDefault();

  // Make a newComment object
  var newComment = {
    name: $("#commentName").val().trim(),
    mood: $("#commentMood").val().trim(),
    songtitle: $("#commentSong").val().trim(),
    // body: $("#commentBody").val().trim(),
    // created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newComment);
  

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newComment)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("fontColor");

      row.append("<p>" + newComment.name + " </p>");
      row.append("<p>"+ newComment.mood + "</p>");
      row.append("<p>" + newComment.songtitle + "</p>");
      // row.append("<p>" + newComment.commentBody + "</p>");
      // row.append("<p>At " + moment(newComment.created_at).format("h:mma on dddd") + "</p>");

      $("#comment-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#commentName").val("");
  $("#commentMood").val("");
  $("#commentSong").val("");
  // $("#commentBody").val("");
});

// When the page loads, grab all of our comments
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("display");
      row.attr("name","mood", "songtitle", + i);
      $("#comment-area").append(row)

      row.append("<p>" + data[i].name + "</p>");
      row.append("<p>" + data[i].mood + "</p>");
      row.append("<p>" + data[i].songtitle + "</p>");
      // row.append("<p>" + data[i].commentBody + "</p>");
      // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#comment-area").prepend(row);

    }
  }
});




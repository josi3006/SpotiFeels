/* global moment */

// When the page loads, grab and display all of our chirps
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("comment");
  
        row.append("<p>" + data[i].author + " comment.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#comment-area").prepend(row);
  
      }
  
    }
  
  });
  
  // When user chirps (clicks addBtn)
  $("#comment-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newChirp = {
      author: $("#author").val().trim(),
      body: $("#comment-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newChirp);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newChirp)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("comment");
  
        row.append("<p>" + newChirp.author + " chirped: </p>");
        row.append("<p>" + newChirp.body + "</p>");
        row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
  
        $("#comment-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#comment-box").val("");
  });
  
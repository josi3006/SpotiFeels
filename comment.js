// this should go in the public folder with js
$(function() {
    
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newComment = {
        name: $("#auth").val().trim(),
        songtitle: ("#songComm").val().trim(),
        comment: $("#quo").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/new", {
        type: "POST",
        data: newComment
      }).then(
        function() {
          console.log("created new quote");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
   
  });
  
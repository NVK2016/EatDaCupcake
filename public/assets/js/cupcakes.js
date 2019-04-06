// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("devoured");

    var newEatingState = {
      devoured: newState
    };

    // Send the PUT request.
    $.ajax("/api/cupcakes/" + id, {
      type: "PUT",
      data: newEatingState
    }).then(
      function() {
        console.log("changed eat to", newEatingState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  //ON CREATION OF A CUPCAKE 
  $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newCupCake = {
        cupcake_name: $("#newcupcake").val().trim(),
        devoured: 0 //default value 
      };
      alert(newCupCake); 
      // Send the POST request.
      $.ajax("/api/cupcakes", {
          type: "POST",
          data: newCupCake
        }).then( function() {
          console.log("created new cupcake");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

});
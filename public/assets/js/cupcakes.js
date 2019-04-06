// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newdevour");

    var newEatingState = {
      devoured: newState
    };

    alert("JS Button CLick" + newState);
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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCupCake = {
      cupcake_name: $("#newcupcake").val().trim(),
      devoured: 0, //Set to false 
    };

    alert("New Data : "+ newCupCake.cupcake_name + "| "+ newCupCake.devoured); 
    // Send the POST request.
    $.ajax("/api/cupcakes", {
      type: "POST",
      data: newCupCake
    }).then(
      function() {
        console.log("created new cupcake");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
});
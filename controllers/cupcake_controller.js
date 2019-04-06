// ---------------------------------------------------
// Dependencies
// ---------------------------------------------------

// load the Express node package
var express = require("express");

var router = express.Router();

// Import the model (cupcake.js) to use its database functions.
var cupcake = require("../models/cupcake.js");

//Define ROUTES 
// ---------------------------------------------------

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    cupcake.selectAll(function(data) {
      var hbsObject = {
        cupcakes: data
      };
      // console.log("Controller:" + data);
      res.render("index", hbsObject);
    });
});

//Insert REcord 
router.post("/api/cupcakes", function(req, res) {
    console.log("Data from HTML:" + req.body);
    cupcake.insertOne("cupcake_name", req.body.cupcake_name,  function(result) {
        // Send back the ID of the new cupcake
        console.log(result.insertId);
        res.redirect("/");
      });
});

//Update REcord 
router.put("/api/cupcakes/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  cupcake.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
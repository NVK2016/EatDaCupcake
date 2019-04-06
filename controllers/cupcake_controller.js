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
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

//Insert REcord 
router.post("/api/cupcakes", function(req, res) {
    console.log(req.body);
    cupcake.insertOne("cupcake_name", req.body.cupcake_name,  function(result) {
        // Send back the ID of the new cupcake
        res.json({ id: result.insertId });
      });
});

//Update REcord 
router.put("/api/cupcakes/:id", function(req, res) {
    var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log("condition", req.body);

    cupcake.update();
});

// Export routes for server.js to use.
module.exports = router;
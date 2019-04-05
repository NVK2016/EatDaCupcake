// ---------------------------------------------------
// Dependencies
// ---------------------------------------------------

// load the Express node package
var express = require("express");

var router = express.Router();

// Import the model (cupcake.js) to use its database functions.
var cupcake = require("../models/cupcake.js");


// Export routes for server.js to use.
module.exports = router;
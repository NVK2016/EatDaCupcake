// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

var orm = require("../config/orm.js");

var cupcake ={
    selectAll: function(cb) {
        //Calling the ORM method that willexecute the SQL statement and send result set in return 
        orm.selectAll("cupcakes", function(res) {
          cb(res);
        });
      },
      insertOne: function(cols, vals, cb) {
        orm.create("cupcakes", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(colVals, cb) {
        orm.update("cupcakes", colVals, function(res) {
          cb(res);
        });
      },
}; 

// Export the database functions for the controller (cupcakecontroller.js).
module.exports = cupcake;

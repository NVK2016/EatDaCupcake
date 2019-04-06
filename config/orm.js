// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
          cb(result);
        });
      },
      insertOne: function(table, cols, colValue, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (' " + colValue + " ') ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    updateOne: function(tableName, values, cb) {
        var queryString = "UPDATE ";
  
        if(values.devoured === "0") {
           queryString += tableName;
           queryString += " SET devoured=" + true;
           queryString += " WHERE id=" + values.id;
        } else {
           queryString += tableName;
           queryString += " SET devoured=" + false;
           queryString += " WHERE id=" + values.id;
        }
        
        console.log(queryString);

        connection.query(queryString, function(err, result) {
           if (err) throw err;
           cb(result);
        });
     },
}

// Export the orm object for the model (cupcake.js).
module.exports = orm;
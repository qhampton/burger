// Import MySQL connection.
var connection = require("../config/connection.js");

//ORM: selectAll, insertOne, updateOne
var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (tableName, columnName, value, cb) {
        var query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [tableName, columnName, value], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableName, columnName, newVal, itemId, cb) {
        var query = "UPDATE ?? SET ?? == ? WHERE id=?";
        connection.query(query, [tableName, columnName, newVal, itemId], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}
// Export the orm object for the model 
module.exports = orm;
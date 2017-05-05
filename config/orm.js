var connection = require("./connection");
var orm = {
    selectAll: function(tableName, callback){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err, data){
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, data);
            }
        });
    },
    insertOne: function(tableName, burger_name, devoured){
        var queryString = "INSERT INTO ??(burger_name,devoured) VALUE (?,?)";
        connection.query(queryString,[tableName, burger_name, devoured], function(err,data){
            if (err) throw err;
            else if (!err){
                console.log("Product Inserted");
            }
        });
    },
    updateOne: function(tableName, colNameToUpdate, valUpdate, colQuery, queryValue){
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableName, { devoured: valUpdate }, { id: queryValue }], function(err,data){
            if(err) throw err;
            else if (!err){
                console.log("Product Updated");
            }
        });
    },

    deleteOne: function (tableName, queryValue) {
        var queryString = "DELETE FROM ?? WHERE ?";
        connection.query(queryString, [tableName, { id: queryValue }], function (err, data) {
            if (err) throw err;
            else if (!err) {
                console.log("Product Deleted");
            }
        });
    },
}

module.exports = orm;
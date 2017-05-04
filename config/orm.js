var connection = require("./connection");
var orm = {
    selectAll: function(tableName, callback){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err,data){
            if (err) throw err;
            console.log(data);
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
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        connection.query(queryString,[tableName,{colNameToUpdate: valUpdate },colQuery, queryValue], function(err,data){
            if(err) throw err;
            else if (!err){
                console.log("Product Updated");
            }
        });
    } 
}

module.exports = orm;
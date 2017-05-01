module.exports = function(app){
    require("../models/burger.js");

    app.get("/index", function(req,res){

    });

    app.post("/index", function(req, res){

        res.redirect("/index");
    });
}




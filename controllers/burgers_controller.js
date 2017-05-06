module.exports = function (app, path) {
    var express = require("express");
    var Burger = require("../models/burger.js");
    var orm = require("../config/orm.js");

    app.get("/index", function (req, res) {
        orm.selectAll("burgers", function (err, response) {
            if (err) throw err;
            else {
                var data = {
                    allBurgers: response
                }
                res.render("index", data);
                console.log("Activated");
            }
        });
    });

    app.post("/index", function (req, res) {
        orm.insertOne("burgers", req.body.name, false);
        res.redirect("/index");
    });

    app.put("/index/update/:id", function (req, res) {
        orm.updateOne("burgers", "devoured", true, "id", parseInt(req.params.id));
        res.redirect("/index");
    })

    app.delete("/index/delete/:id", function (req, res) {
        console.log(req.params.id);
        orm.deleteOne("burgers", parseInt(req.params.id));
        res.redirect("/index");
    })
}




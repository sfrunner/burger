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
        console.log(req.body.name);
        orm.insertOne("burgers", req.body.name, false);
        res.redirect("/index");
    });

    app.get("/index/:id", function (req, res) {
        console.log(req.params.id);
        orm.updateOne("burgers", "devoured", true, "id", parseInt(req.params.id));
        res.redirect("/index");
    })
}




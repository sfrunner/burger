module.exports = function (app, path) {
    var express = require("express");
    var Burger = require("../models/burger.js");
    var orm = require("../config/orm.js");

    app.get("/index", function (req, res) {
        res.render("index");
        console.log("Activated");
    });

    app.post("/index", function (req, res) {
        console.log(req.body.name);
        orm.insertOne("burgers", req.body.name, false);
        var burgerList = orm.selectAll("burgers", allBurgers).then(function () {
            console.log(allBurgers);
        });
        res.send(orm.selectAll("burgers"));
    });
}




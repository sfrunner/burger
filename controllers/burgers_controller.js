module.exports = function (app, path) {
    var express = require("express");
    var Burger = require("../models/burger.js");
    var orm = require("../config/orm.js");

    app.get("/", function (req, res) {
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

    app.post("/", function (req, res) {
        orm.insertOne("burgers", req.body.name, false);
        res.redirect("/");
    });

    app.put("/update/:id", function (req, res) {
        orm.updateOne("burgers", "devoured", true, "id", parseInt(req.params.id));
        res.redirect("/");
    })

    app.delete("/delete/:id", function (req, res) {
        console.log(req.params.id);
        orm.deleteOne("burgers", parseInt(req.params.id));
        res.redirect("/");
    })
}




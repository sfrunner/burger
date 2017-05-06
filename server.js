var express = require('express');
var exphbs = require('express-handlebars');
var path = require("path");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3080;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "views", "public")));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./controllers/burgers_controller.js")(app, path);

app.listen(PORT);
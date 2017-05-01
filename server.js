var express = require('express');
var exphbs  = require('express-handlebars');
require("method-override");
require("body-parser");
var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join( __dirname,"app")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/burgers_controller.js")(app,path);

app.listen(3080, "localhost");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3030;

var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(port, function() {
        console.log("App listening on port " + port);
    });
});
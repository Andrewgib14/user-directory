const data = require("./data.js");
const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const app = express();
const port = process.env.PORT || 8000;

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", function (req, res) {
    res.render("home", data);
})

app.get("/:id", function (req, res) {
    let userId = req.params.id;
    let user = data.users.find(user => user.id === parseInt(userId));
    res.render("profile", user);
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});




// DEPENDENCIES
var path = require("path");

// ROUTING

module.exports = function(app) {
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
}
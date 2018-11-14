// DEPENDENCIES
var path = require("path");

// ROUTING

module.exports = function(app) {
    // Set up route for survey first so it won't get affected by the * to go to home page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });

    // Set the route as * would take user to the page no matter what they enter  
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });  
}
// Load data
var userData = require("../data/friends");

// Routing
module.exports = function(app) {

    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(userData);
      });
      
    // API Post Requests
    app.post("/api/friends", function(req, res) {
        // Checking the post data
        console.log(req.body);
        // Post data after calculate the best match
    }); 
};
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
        //console.log(req.body);
        var bestFriendDifference = 100;
        var bestFriendIndex = -1;        
        var currentUser = req.body;   
        for (var i = 0; i < userData.length; i++) {
            var currentFriend = userData[i];
            var totalDifference = 0;
            for (var j = 0; j < currentUser.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = currentUser.scores[j];    
                totalDifference = totalDifference + Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));
                              
            }
            if (totalDifference < bestFriendDifference) {
                bestFriendDifference = totalDifference;
                bestFriendIndex = i;
            }
            
        }
        userData.push(currentUser);
        res.json(userData[bestFriendIndex]);
        // Post data after calculate the best match
    }); 
};
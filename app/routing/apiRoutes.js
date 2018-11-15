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

        // Variable to hold the calculate result
        var bestFriendDifference = 100;

        // Variable to hold the best match index
        var bestFriendIndex = -1;
        
        // Variable to hold the data current user submitted
        var currentUser = req.body; 
        // Checking through all the user information hold in friend.js  
        for (var i = 0; i < userData.length; i++) {
            var currentFriend = userData[i];
            // Variable to hold the calculated result
            var totalDifference = 0;
            // Checking each score in userData and compare it with the score of current user
            for (var j = 0; j < currentUser.scores.length; j++) {
                // Variables to hold current Friend's score and current user's score 
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = currentUser.scores[j];
                // Use Math method abusolute to calculate the difference between two scores    
                totalDifference = totalDifference + Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));                              
            }

            // Taking the lowest calculated result and set the that currentfriend as bestfriend 
            if (totalDifference < bestFriendDifference) {
                bestFriendDifference = totalDifference;
                bestFriendIndex = i;
            }
            
        }

        // Pushing the bestfriend result to current user
        userData.push(currentUser);
        res.json(userData[bestFriendIndex]);
    }); 
};
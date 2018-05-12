// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// This data source hold arrays of information on our friends.
// ===============================================================================

var friendData = require('./../data/friends.js'); 
var path = require('path');

//Routes
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
        
    });

    
    // API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out the survey... this data is then sent to the server...
	// Then the server saves the data to the friendData array)
	// ---------------------------------------------------------------------------

	app.post("/api/friends", function(req, res){
        console.log("This is the req.body from apiroutes" + req.body)
        // Note the code here. Our "server" will respond to requests and 
        //let users know their most compatible friend.
        // It will do this by sending out the value "true" 
        var newPerson = req.body; 
        var bestMatch = 1000;
        var compatiblePerson; 
        for (var i = 0; i < friendData.length; i++) {
            var difference = compareFriends(newPerson.scores, friendData[i].scores);
            console.log("The new person and " + i + "are this difference:" + difference);
            if (difference < bestMatch) {
                bestMatch = difference; 
                compatiblePersonName = friendData[i].name; 
                compatiblePersonPhoto = friendData[i].photo;
                
            }
            // console.log("This is your most compatible match " + compatiblePerson);
        }
        // friendData.push(req.body);

        // console.log("This is after push:" + friendData);



        

        friendData.push(req.body);
        // console.log("This is after push:" + friendData);
        res.json({status: 'OK', compatiblePersonName: compatiblePersonName, compatiblePersonPhoto: compatiblePersonPhoto});
	});
}

function compareFriends (a,b) {
    console.log(a);
    console.log(b);
    var totalDifference = 0; 

    for(var i= 0; i < a.length; i++){
       comparisonNumber = difference (a[i],b[i]);
       console.log("The difference of" + i + "is" + comparisonNumber );
       totalDifference = totalDifference + comparisonNumber;
       console.log(totalDifference);
    }
    console.log(totalDifference);
    return totalDifference
};

function difference(a, b) {
    return Math.abs(a - b);
}
  
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQ-7CRuHhQyDGt8zIpvhuee0DbPmlJILs",
    authDomain: "train-schedule-6df51.firebaseapp.com",
    databaseURL: "https://train-schedule-6df51.firebaseio.com",
    projectId: "train-schedule-6df51",
    storageBucket: "train-schedule-6df51.appspot.com",
    messagingSenderId: "381944594903",
    appId: "1:381944594903:web:4fc4ee5ffd89ad61becb92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function timeConvert(a,b) {
    

}

$("#add-train").on("click", function(event) {
    event.preventDefault();

    //Grab user input
    var trainName = $("#train-input").val().trim();
    var trainDest = $("#dest-input").val().trim();
    var trainTime = $("#time-input").val().trim();
    var trainRate = $("#rate-input").val().trim();

    


    //Creates temp object to hold train data
    var newTrain = {
        train: trainName,
        destination: trainDest,
        time: trainTime,
        rate: trainRate
    };

    //Uploads train data to database
    database.ref().push(newTrain);

    //Clears text boxes
    $("#train-input").val("");
    $("#dest-input").val("");
    $("#time-input").val("");
    $("#rate-input").val("");
});

//Create firebase event for adding to HTML and database
database.ref().on("child_added", function(childSnapshot) {
    
    var trainName = childSnapshot.val().train;
    var trainDest = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainRate = childSnapshot.val().rate;
  
    var timeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
    console.log("Convert " + timeConverted);
    var currentTime = moment();
    console.log("Time Now " + currentTime);
    var diffTime = moment().diff(moment(timeConverted), "minutes");
    console.log("tDiff " + diffTime);
    
    var tRemain = diffTime % trainRate;
    console.log("tLeft " + tRemain);
    var tMinTILL = trainRate - tRemain;
    console.log("tTill " + tMinTILL);
    var nextTrain = moment().add(tMinTILL, "minutes").format("HH:mm");
    console.log("next " +nextTrain);
    // Create new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(nextTrain),
        $("<td>").text(trainRate),
        $("<td>").text(tMinTILL)
    );
    
    // Append new row to table
    $("#current-trains > tbody").append(newRow);

});
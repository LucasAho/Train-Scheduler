# Train-Scheduler
Week 7 recommended homework for DU bootcamp. This website uses a datebase hosted with Firebase to store multiple consistent train schedules, which are viewable across multiple devices. Moment.js is used to convert time to a 24 hour clock and calculate time to next train. The code is deployed to https://lucasaho.github.io/Train-Scheduler/.

## Schedule Description
The website contains a header, a chart with train times, and an input field for users to add new trains. The header uses bootstrap jumbotron and is not dynamic. The chart below, labeled "Current Train Schedule" contains rows for the train name, destination, next arrival (calculated with moment), frequency of trains in minutes, and a counter for the number of minutes away a train is. The input field takes the train name, destination, very first train time, and frequency in minutes to calculate times for and push the newest train to Firebase and the chart.

## File Infrastructure
### HTML
* index.html: The references to jquery, moment.js, firebase, and bootstrap are in the head section of this file. The remainder is the jumbotron, visual structure for the train schedule, and the input fields for user-interactions.

### Javascript
* logic.js: The firebase initilization is first in the logic file, followed by an on click event from the add train button. This on click holds user input in variables and adds these variables to Firebase. Beneath this, another function is called when a train is added to Firebase, handling the calculations of time and updating the HTML to display the info held in Firebase. 

### CSS
* bootstrap: Used for wireframing of HTML layout
* style: unused but available in case bootstrap will not function for needed edits